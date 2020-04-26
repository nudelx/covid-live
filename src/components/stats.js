import React from 'react'

export default ({ stats }) => {
  if (!stats) return null
  return (
    <div className={`stats ${stats > 0 ? 's-red' : 's-green'}`}>
      <div className={stats > 0 ? 'arrow-up' : 'arrow-down'}></div>
      {`${stats ? stats.toFixed(2) + '%' : 0}`}
    </div>
  )
}
