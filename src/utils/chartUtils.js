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

export const colors = [
  '#1abc9c',
  '#3498db',
  '#9b59b6',
  '#e67e22',
  '#c0392b',
  '#f1c40f',
  '#60a3bc',
  '#3c6382',
  '#0c2461',
  '#079992',
  '#f6b93b',
  '#60a3bc',
  '#eb2f06',
  '#6a89cc',
  '#D980FA',
  '#C4E538',
  '#FFC312',
]
export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max))
