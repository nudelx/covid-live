import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import { COLORS, EMPTY_COLOR, getColorIndex } from '../../utils/predictionUtils'

export default ({ value = 71 }) => {
  const _value = value > 100 ? 100 : value
  const data = [
    { name: 'value', value: _value },
    { name: 'empty', value: 100 - _value },
  ]
  const color = getColorIndex(_value)
  const customLabel = ({ percent, index }) => {
    if (index === 1) return null
    return (
      <text
        x={140}
        y={90}
        fill="white"
        textAnchor={'start'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }
  return (
    <PieChart width={300} height={200}>
      <Pie
        data={data}
        cx={150}
        cy={100}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        labelLine={false}
        blendStroke
        dataKey="value"
        label={customLabel}
      >
        <Cell fill={COLORS[color]} />
        <Cell fill={EMPTY_COLOR} />
      </Pie>
    </PieChart>
  )
}
