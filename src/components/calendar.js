import React from 'react'
import useCalendar from '../hooks/useCalendar'

export default ({ dayName, dayNumber, month }) => {
  const { date } = useCalendar({ dayName, dayNumber, month })
  if (!date) return null
  return (
    <div className="calendar">
      <div className="number">{date.dayNumber}</div>
      <div className="holder">
        <div className="day">{date.dayName}</div>
        <div className="month">{date.month}</div>
      </div>
    </div>
  )
}
