import React from 'react'
import useLocation from '../../hooks/useLocation'
import { capitalize } from '../../utils/options'
const options = [
  'as',
  'country',
  'city',
  'countryCode',
  'isp',
  'region',
  'regionName',
  'timezone',
]

export default () => {
  const { location } = useLocation()
  return (
    location && (
      <div className="location">
        <div className="locationBody">
          <ul className="locationList">
            {options.map((o) => (
              <li key={o}>
                <span className="wide-title">{`${capitalize(o)}:`} </span>
                <span>{location[o]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  )
}
