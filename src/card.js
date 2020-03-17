import React, { useEffect, useState } from 'react'

export default ({
  active,
  cases,
  country,
  critical,
  deaths,
  recovered,
  todayCases,
  todayDeaths,
  index
}) => {
  const [flag, setFlag] = useState('#')

  useEffect(() => {
    fetch(
      `https://restcountries.eu/rest/v2/name/${
        country === 'UK' ? 'GB' : country
      }`
    )
      .then(res => res.json())
      .then(data => data[0] && setFlag(data[0].flag))
  }, [country])

  return (
    <div className="card">
      <div className="title">
        <div>{index}</div>
        <div className="flagHolder">
          <div className="flag">
            {flag !== '#' ? (
              <img width="30" height="25" alt={country} src={flag} />
            ) : null}
          </div>
          <div>{country}</div>
        </div>
      </div>
      <div className="body">
        <ul>
          <li>
            <span>Active: </span>
            <span>{active}</span>
          </li>
          <li>
            <span>Cases: </span>
            <span>{cases}</span>
          </li>
          <li>
            <span>Critical: </span>
            <span>{critical}</span>
          </li>
          <li>
            <span>Deaths: </span>
            <span>{deaths}</span>
          </li>
          <li>
            <span>TodayCases:</span>
            <span>{todayCases}</span>
          </li>
          <li>
            <span>TodayDeaths:</span>
            <span>{todayDeaths}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
