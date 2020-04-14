import React, { useEffect, useState } from 'react'
import fbApp from '../../utils/firebase'
import Location from './location'
import DropDown from '../dropDownSearch'
import PredictionChart from './predictionChart'

export default () => {
  const [prediction, setPrediction] = useState(null)
  const [selected, setSelected] = useState(null)
  const normalizeData = data => {
    const e = data.map(c => {
      const obj = {
        confidence: c.confidence,
        country: c.country,
        update: c.update
      }

      obj.data = c.growth.reduce(
        (all, value, index) => [
          ...all,
          {
            growth: value,
            trend: c.trend[index],
            date: c.dates[index],
            cases: c.cases[index],
            daily: c.daily[index]
          }
        ],
        []
      )
      return obj
    })
    return e
  }

  useEffect(() => {
    fbApp
      .database()
      .ref()
      .child('data/prediction')
      .on('value', snap => {
        setPrediction(normalizeData(snap.val()))
      })
  }, [])

  console.log('render prediction', prediction)
  console.log('selected for prediction', selected)
  if (!prediction) return null
  const dataKeysObj = {
    growth: ['growth', 'trend'],
    daily: ['daily'],
    cases: ['cases']
  }

  if (!prediction) return null

  const selectedPrediction = selected
    ? prediction.filter(i => i.country === selected.country)[0]
    : prediction[0]
  return (
    <div className="predictionBoard">
      <div className="dropHolder">
        <DropDown
          options={prediction}
          index={'country'}
          name={'country'}
          onChange={setSelected}
        />
      </div>
      <ul className="chartList">
        <li>
          <PredictionChart
            data={selectedPrediction}
            dataKeys={dataKeysObj.growth}
            country={selectedPrediction.country}
            title={`${selectedPrediction.country} - ${dataKeysObj.growth.join(
              ' '
            )} Prediction`}
          />
        </li>
        <li>
          <PredictionChart
            data={selectedPrediction}
            country={selectedPrediction.country}
            dataKeys={dataKeysObj.daily}
            title={`${selectedPrediction.country} - ${dataKeysObj.daily.join(
              ' '
            )}`}
          />
        </li>
        <li>
          <PredictionChart
            data={selectedPrediction}
            dataKeys={dataKeysObj.cases}
            title={`${selectedPrediction.country} - ${dataKeysObj.cases.join(
              ' '
            )}`}
          />
        </li>
      </ul>

      <Location />
    </div>
  )
}
