import React, { useEffect, useState } from 'react'
import { options, capitalize } from './options'

export default props => {
  const { country, index } = props
  const [flag, setFlag] = useState('#')

  useEffect(() => {
    fetch(
      `https://restcountries.eu/rest/v2/name/${
        country === 'UK' ? 'GB' : country
      }?fields=name;flag`
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
          {options.map(o => (
            <li key={o}>
              <span>{`${capitalize(o)}:`} </span>
              <span>{props[o]}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
