import React from 'react'
import {
  Bar,
  Line,
  Area,
  XAxis,
  YAxis,
  AreaChart,
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
export default ({ data, country }) => {
  console.log('DATA', data)
  if (!data) return null
  const graphHeight = 400
  const graphData = data.growth.reduce(
    (all, value, index) => [
      ...all,
      { growth: value, trend: data.trend[index], date: data.dates[index] }
    ],
    []
  )
  console.log('graphData', graphData)
  return (
    <div className="chart chartCenter">
      <div className="chartTitle">
        {`${country} - Covid 19 Growth Rate Prediction`}
      </div>
      <AreaChart
        width={900}
        height={graphHeight}
        data={graphData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 40
        }}
      >
        <Legend verticalAlign="top" align="right" />
        <XAxis
          dataKey="date"
          interval={0}
          angle={60}
          padding={{ right: 10 }}
          dy={30}
          tick={{ fontSize: 9 }}
        />
        <YAxis interval={0} />
        <Tooltip />
        <Area
          opacity="0.8"
          type="monotone"
          dataKey="growth"
          stackId="1"
          stroke="#8e44ad"
          fill="#8e44ad"
        />
        <Area
          opacity="0.8"
          type="monotone"
          dataKey="trend"
          stackId="1"
          stroke="#208f4e"
          fill="#27ae60"
        />
      </AreaChart>
    </div>
  )
}
