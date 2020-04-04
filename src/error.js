import React from 'react'

export default ({ error }) => {
  return (
    <div>
      <div className="fog"></div>
      <div className="error">
        <div className="errorMsg">{error}</div>
      </div>
    </div>
  )
}
