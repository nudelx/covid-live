import { useEffect, useState } from 'react'

export default (country) => {
  const [flag, setFlag] = useState('#')
  useEffect(() => {
    const cached = localStorage.getItem(country)
    if (cached) {
      return setFlag(JSON.parse(cached).flag)
    }
    fetch(
      `https://restcountries.eu/rest/v2/name/${
        country === 'UK' ? 'GB' : country
      }?fields=name;flag`
    )
      .then((res) => res.json())
      .then(
        (res) =>
          (res[0] && localStorage.setItem(country, JSON.stringify(res[0]))) ||
          res
      )
      .then((data) => data[0] && setFlag(data[0].flag))
  }, [country])
  return {
    flag,
    setFlag,
  }
}