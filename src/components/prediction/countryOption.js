import React from 'react'
import useFlag from '../../hooks/useFlag'

export default (props) => {
  const { country, name, onClick } = props
  const { flag } = useFlag(country[name])

  return (
    <div className="countryOption" onClick={onClick}>
      <img alt={country[name]} width="20" height="20" src={flag} />
      <span>{country[name]}</span>
    </div>
  )
}
