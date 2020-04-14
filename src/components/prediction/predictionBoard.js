import React, { useEffect, useState } from 'react'
import fbApp from '../../utils/firebase'
import Location from './location'
import DropDown from '../dropDownSearch'

export default () => {
  const [prediction, setPrediction] = useState(null)

  useEffect(() => {
    const normalizeOptions = options => {
      if (Array.isArray(options)) {
        return options.map(p => ({
          ...p,
          name: p.country,
          key: p.country,
          id: p.country
        }))
      } else {
        console.log('jopa', options)
      }
    }
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
    <div>
      <DropDown options={prediction} index={'country'} name={'country'} />
      <Location />
    </div>
  )
}
