import React from 'react'
import {
  Bar,
  Line,
  Area,
  XAxis,
  YAxis,
  ComposedChart,
  Tooltip,
  Legend,
  LabelList
} from 'recharts'
const renderCustomizedLabel = props => {
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
export default ({ data, sortedKey }) => {
  return (
    <div className="chart">
      <ComposedChart
        layout="vertical"
        key={new Date().getTime()}
        width={900}
        height={5000}
        data={data}
        margin={{
          top: 10,
          right: 80,
          bottom: 20,
          left: 20
        }}
      >
        <XAxis type="number" verticalAlign="top" orientation={'top'} />
        <YAxis dataKey="country" type="category" />

        <Tooltip />
        <Legend verticalAlign="top" align="right" />
        <Area
          type="monotone"
          dataKey="deaths"
          fill="#e74c3c"
          stroke="#c0392b"
        />
        <Bar dataKey={sortedKey} barSize={100} fill="#2980b9">
          <LabelList dataKey={sortedKey} content={renderCustomizedLabel} />
        </Bar>
        <Line type="monotone" dataKey="cases" stroke="#27ae60" />
      </ComposedChart>
    </div>
  )
}
