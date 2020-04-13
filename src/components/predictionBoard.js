import React, { useEffect, useState } from 'react'
import fbApp from '../utils/firebase'

export default () => {
  const [location, setLocation] = useState(null)
  const [prediction, setPrediction] = useState(null)

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then(res => res.json())
      .then(setLocation)
  }, [])

  useEffect(() => {
    fbApp
      .database()
      .ref()
      .child('data/prediction')
      .on('value', snap => {
        setPrediction(snap.val())
      })
  }, [])

  console.log('render prediction')
  return (
    <div>
      {console.log(prediction)}
      {console.log(location)}
    </div>
  )
}
