import React from 'react'
import useFlag from '../hooks/useFlag'
import { options, capitalize } from '../utils/options'
import Stats from './stats'

export default (props) => {
  const { country, index, stats } = props

  const { flag } = useFlag(country) 
  return (
    <div className="card">
      <div className="title">
        <div>
          <div className="cardIndex">{index}</div>
        </div>
        <div className="flagHolder">
          <Stats stats={stats} />
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
