import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import { COLORS, EMPTY_COLOR, getColorIndex } from '../../utils/predictionUtils'

export default ({ value = 89, width = 200, height = 100 }) => {
  const _value = value > 100 ? 100 : value
  const data = [
    { name: 'value', value: _value },
    { name: 'empty', value: 100 - _value },
  ]
  const color = getColorIndex(_value)
  const customLabel = ({ percent, index }) => {
    if (index === 1) return null
    const txt = `${(percent * 100).toFixed(0)}%`
    return (
      <text
        x={width / 2 - (txt.length / 2) * 8}
        y={height * 0.7}
        fill="#abb9bb"
        textAnchor={'center'}
        dominantBaseline="central"
        fontSize={20}
      >
        {txt}
      </text>
    )
  }
  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        cx={width / 2}
        cy={height * 0.8}
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
