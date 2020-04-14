import React, { useEffect, useState } from 'react'
import fbApp from '../../utils/firebase'
import Location from './location'
import DropDown from '../dropDownSearch'
import PredictionChart from './predictionChart'

export default () => {
  const [prediction, setPrediction] = useState(null)

  useEffect(() => {
    fbApp
      .database()
      .ref()
      .child('data/prediction')
      .on('value', snap => {
        setPrediction(snap.val())
      })
  }, [])

  console.log('render prediction', prediction)
  return (
    <div className="predictionBoard">
      <div className="">
        <DropDown options={prediction} index={'country'} name={'country'} />
      </div>
      <ul className="chartList">
        <li>
          <PredictionChart
            data={prediction && prediction[0]}
            country={'test'}
          />
        </li>
        <li>
          <PredictionChart
            data={prediction && prediction[0]}
            country={'test'}
          />
        </li>
        <li>
          <PredictionChart
            data={prediction && prediction[0]}
            country={'test'}
          />
        </li>
      </ul>

      <Location />
    </div>
  )
}
