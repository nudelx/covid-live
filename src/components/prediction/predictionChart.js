import React from 'react'
import { colors, getRandomInt } from '../../utils/chartUtils'
import useFlag from '../../hooks/useFlag'
import {
  Area,
  XAxis,
  CartesianGrid,
  YAxis,
  AreaChart,
  Tooltip,
  Legend,
} from 'recharts'

export default ({ data, title, dataKeys, country }) => {
  if (!data) return null
  const graphHeight = 400
  let minGraphWidth = window.outerWidth * 0.9
  minGraphWidth = minGraphWidth < 500 ? 500 : minGraphWidth
  const { flag } = useFlag(country)

  return (
    <div className="chartCenter chartShadow chatWidth">
      <div className="chartTitle">
        <span>
          <img width="50" height="30" src={flag} alt={country} />
        </span>
        <span>{`${title}`}</span>
      </div>
      <AreaChart
        width={minGraphWidth}
        height={graphHeight}
        data={data.data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 40,
        }}
      >
        <Legend verticalAlign="top" align="right" />
        <XAxis
          dataKey="date"
          interval={0}
          angle={60}
          padding={{ right: 10 }}
          dy={30}
          tick={{ fontSize: 10 }}
        />
        <YAxis interval={0} />
        <Tooltip
          contentStyle={{
            backgroundColor: '#274a56',
            opacity: 0.8,
            border: '1px solid #000',
          }}
        />
        <CartesianGrid strokeDasharray="2 2" stroke={'#062d3d'} />
        {dataKeys.map((k) => {
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
      </AreaChart>
    </div>
  )
}
