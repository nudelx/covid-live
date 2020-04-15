import React, { useEffect, useState } from 'react'
import fbApp from '../../utils/firebase'
import Location from './location'
import DropDown from '../dropDownSearch'
import PredictionChart from './predictionChart'
import Spinner from '../spinner'
import { normalizeData, dataKeysObj } from '../../utils/predictionUtils'

export default () => {
  const [prediction, setPrediction] = useState(null)
  const [selected, setSelected] = useState(null)
  const [reload, setReload] = useState(true)

  useEffect(() => {
    fbApp
      .database()
      .ref()
      .child('data/prediction')
      .on('value', (snap) => {
        setPrediction(normalizeData(snap.val()))
      })
  }, [])

  useEffect(() => {
    const resizeListener = () => {
      window.timer = setTimeout(() => setReload(reload + 1), 500)
    }
    window.addEventListener('resize', resizeListener)
    return () => {
      clearTimeout(window.timer)
      window.removeEventListener('resize', resizeListener)
    }
  }, [reload])

  if (!prediction) return <Spinner />
  const selectedPrediction = selected
    ? prediction.filter((i) => i.country === selected.country)[0]
    : prediction[0]

  return (
    <div className="predictionBoard" key={reload}>
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
