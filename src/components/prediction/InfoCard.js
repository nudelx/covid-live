import React from 'react'
import Calendar from '../calendar'
import ConfidenceChart from '../prediction/confidenceChart'

export default ({ update, confidence }) => {
  console.log(update)
  const [y, m, d] = update.split('-')
  return (
    <div className="info chartShadow">
      <div>
        <Calendar
          year={parseInt(y)}
          dayNumber={parseInt(d)}
          month={parseInt(m)}
        />
      </div>
      <div className="confidence">
        <ConfidenceChart value={confidence} />
        <div className="confidenceTitle">Confidence Level</div>
      </div>
    </div>
  )
}
