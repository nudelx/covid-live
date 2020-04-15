import { useEffect, useState } from 'react'

export default (country) => {
  const [flag, setFlag] = useState('#')
  useEffect(() => {
    fetch(
      `https://restcountries.eu/rest/v2/name/${
        country === 'UK' ? 'GB' : country
      }?fields=name;flag`
    )
      .then((res) => res.json())
      .then((data) => data[0] && setFlag(data[0].flag))
  }, [country])
  return {
    flag,
    setFlag,
  }
}
