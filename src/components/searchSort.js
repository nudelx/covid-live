import React from 'react'
import { options, capitalize } from '../utils/options'

export default ({ onChangeSearch, search, onChangeSort }) => {
  return (
    <div className="tools">
      <div className="search">
        <label htmlFor="search">Search</label>
        <input
          placeholder="..."
          id="search"
          name="search"
          onChange={e => {
            e.preventDefault()
            onChangeSearch(e.target.value)
          }}
          value={search}
        />
      </div>
      <div className="sort">
        <label htmlFor="sort">Sort</label>
        <select id="sort" onChange={e => onChangeSort(e.target.value)}>
          {options.map(o => (
            <option key={o} value={o}>
              {capitalize(o)}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
