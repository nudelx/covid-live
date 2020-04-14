import React, { useEffect, useState } from 'react'
import fbApp from '../../utils/firebase'
import Location from './location'
import DropDown from '../dropDownSearch'
import PredictionChart from './predictionChart'

export default () => {
  const [prediction, setPrediction] = useState(null)
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
  if (!prediction) return null
  const dataKeysObj = {
    growth: ['growth', 'trend'],
    daily: 'daily',
    cases: 'cases'
  }
  return (
    <div className="predictionBoard">
      <div className="dropHolder">
        <DropDown options={prediction} index={'country'} name={'country'} />
      </div>
      <ul className="chartList">
        <li>
          <PredictionChart
            data={prediction && prediction[0]}
            dataKeys={dataKeysObj.growth}
            country={prediction[0].country}
            title={`${prediction[0].country} - ${dataKeysObj.growth.join(
              ' '
            )} Prediction`}
          />
        </li>
        <li>
          <PredictionChart
            data={prediction && prediction[0]}
            country={prediction[0].country}
            dataKeys={dataKeysObj.daily}
            title={`${prediction[0].country} - ${dataKeysObj.daily}`}
          />
        </li>
        <li>
          <PredictionChart
            data={prediction && prediction[0]}
            dataKeys={dataKeysObj.cases}
            title={`${prediction[0].country} - ${dataKeysObj.cases}`}
          />
        </li>
      </ul>

      <Location />
    </div>
  )
}
