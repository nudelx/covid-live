import React from 'react'
const capitalize = s => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}
export default ({ onChangeSearch, search, options, sort, onChangeSort }) => {
  console.log('sort', sort)
  return (
    <div className="header">
      <div className="main-title">
        <div>Covid-19 Live Dashboard</div>
        <div className="sub-title">by Nudelman Alex</div>
      </div>

      <div className="tools">
        <div className="search">
          <label for="search">Search</label>
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
          <label for="sort">Sort</label>
          <select id="sort" onChange={e => onChangeSort(e.target.value)}>
            {options.map(o => (
              <option key={o} value={o}>
                {capitalize(o)}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
