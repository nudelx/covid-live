import React from 'react'
import { renderCustomizedLabel } from '../utils/chartUtils'
import {
  Bar,
  Line,
  Area,
  XAxis,
  YAxis,
  ComposedChart,
  Tooltip,
  Legend,
  LabelList,
} from 'recharts'

export default ({ data, sortedKey }) => {
  const calculated = 30 * data.length
  const graphHeight = calculated < 100 ? 100 : calculated
  return (
    <div className="chart">
      <ComposedChart
        layout="vertical"
        key={new Date().getTime()}
        width={900}
        height={graphHeight}
        data={data}
        margin={{
          top: 10,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis type="number" verticalAlign="top" orientation={'top'} />
        <YAxis dataKey="country" type="category" interval={0} />

        <Tooltip contentStyle={{ backgroundColor: '#fff', opacity: 0.8 }} />
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
