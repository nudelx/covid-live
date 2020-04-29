import { useEffect, useState } from 'react'
import API from '../utils/api'

export default () => {
  const [yesterday, setYesterday] = useState(null)

  useEffect(() => {
    fetch(API.covidAPIDayBefore)
      .then((res) => res.json())
      .then((res) =>
        res.reduce((all, value) => ({ ...all, [value.country]: value }), {})
      )
      .then(setYesterday)
  }, [])

  return {
    yesterday,
    setYesterday,
  }
}
