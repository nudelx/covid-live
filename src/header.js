import React from 'react'
import { options, capitalize } from './options'
import Title from './title'

export default ({
  onChangeSearch,
  search,
  sort,
  onChangeSort,
  setShow,
  show
}) => {
  return (
    <div className="header">
      <Title />
      <div
        onClick={() => setShow(show === 'grid' ? 'graph' : 'grid')}
        className={`toggleButton ${
          show === 'grid' ? 'chart-icon' : 'grid-icon'
        }`}
      ></div>

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
    </div>
  )
}
