import React from 'react'
import { options, capitalize } from './options'

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
      <div className="main-title">
        <div>Covid-19 Live Dashboard</div>
        <div className="sub-title">
          by <a href="https://github.com/nudelx">Nudelman Alex</a>
        </div>
        <div className="sub-title-2">
          DataSource:{' '}
          <a href="https://www.worldometers.info">www.worldometers.info</a> with{' '}
          <a href="https://github.com/javieraviles/covidAPI">API</a> by{' '}
          <a href="https://github.com/javieraviles">Javier Aviles</a>
        </div>
      </div>

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
