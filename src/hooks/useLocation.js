import { useState, useEffect } from 'react'

export default () => {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    fetch('http://ip-api.com/json')
      .then(res => res.json())
      .then(setLocation)
  }, [])
  return {
    location,
    setLocation
  }
}
