import React, { useState, useEffect } from 'react'

export default ({ dayName, dayNumber, month }) => {
  const [date, setDate] = useState(null)
  useEffect(() => {
    const date = new Date()
    var months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    var days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    setDate({
      dayNumber: dayNumber || date.getDate(),
      dayName: dayName || days[date.getDay()],
      month: month || months[date.getMonth()],
    })
  }, [dayName, dayNumber, month])
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
