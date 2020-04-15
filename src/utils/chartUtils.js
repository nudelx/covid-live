import React from 'react'

export const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props
  const radius = 10
  const offSet = 25

  return (
    <g>
      <text
        x={x + width + offSet}
        y={y + radius}
        fill="#ccc"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}
      </text>
    </g>
  )
}
