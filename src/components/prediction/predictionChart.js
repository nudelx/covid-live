import React from 'react'
import { Area, XAxis, YAxis, AreaChart, Tooltip, Legend } from 'recharts'

export default ({ data, title }) => {
  console.log('DATA', data)
  if (!data) return null
  const graphHeight = 400
  let minGraphWidth = window.screen.width * 0.9
  minGraphWidth = minGraphWidth < 500 ? 500 : minGraphWidth

  console.log('graphData', data)
  return (
    <div className="chart chartCenter chartShadow">
      <div className="chartTitle">{title}</div>
      <AreaChart
        width={minGraphWidth}
        height={graphHeight}
        data={data.data}
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
