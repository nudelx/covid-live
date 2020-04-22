import { useState, useEffect } from 'react'

export default ({ dayNumber, dayName, month }) => {
  const [date, setDate] = useState(null)
  useEffect(() => {
    const date = new Date()
    const months = [
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
    const days = [
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

  return {
    date,
    setDate,
  }
}
