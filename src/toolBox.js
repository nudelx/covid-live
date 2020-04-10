import React from 'react'

export default ({ show, setShow, predShow, setShowPred }) => {
  return (
    <div className="buttons">
      <div
        onClick={() => setShow(show === 'grid' ? 'graph' : 'grid')}
        className={`toggleButton ${
          show === 'grid' ? 'chart-icon' : 'grid-icon'
        }`}
      ></div>
    </div>
  )
}
