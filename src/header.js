import React from 'react'
import Title from './title'

export default ({ children }) => {
  return (
    <div className="header">
      <Title />

      {children}
    </div>
  )
}
