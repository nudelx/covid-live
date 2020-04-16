import React from 'react'
import useFlag from '../hooks/useFlag'
import { options, capitalize } from '../utils/options'

export default (props) => {
  const { country, index } = props
  const { flag } = useFlag(country)

  return (
    <div className="card">
      <div className="title">
        <div className="cardIndex">{index}</div>
        <div className="flagHolder">
          <div className="countryName">{country}</div>
          <div
            className={`flag ${
              country.toLowerCase() === 'world' ? 'world' : ''
            }`}
          >
            {flag !== '#' ? (
              <img width="30" height="25" alt={country} src={flag} />
            ) : null}
          </div>
        </div>
      </div>
      <div className="body">
        <ul className="stats">
          {options.map((o) => (
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
