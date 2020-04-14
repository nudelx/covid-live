import React from 'react'
import {
  Area,
  XAxis,
  CartesianGrid,
  YAxis,
  AreaChart,
  Tooltip,
  Legend
} from 'recharts'
const colors = [
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
  '#FFC312'
]
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export default ({ data, title, dataKeys }) => {
  console.log('DATA', data)
  if (!data) return null
  const graphHeight = 400
  let minGraphWidth = window.screen.width * 0.7
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
        <CartesianGrid strokeDasharray="2 2" stroke={'#062d3d'} />
        {dataKeys.map(k => {
          const color = colors[getRandomInt(colors.length)]
          return (
            <Area
              key={k}
              fillOpacity="0.3"
              type="monotone"
              dataKey={k}
              stackId="1"
              stroke={color}
              fill={color}
            />
          )
        })}

        {/* <Area
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
        /> */}
      </AreaChart>
    </div>
  )
}
