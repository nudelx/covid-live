import { useState, useEffect } from 'react'

export default ({ dayNumber, dayName, month, year }) => {
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
      dayName: dayName || days[dayNumber] || days[date.getDay()],
      month: months[month - 1] || months[date.getMonth()],
      year: year || date.getFullYear(),
    })
  }, [dayName, dayNumber, month, year])

  return {
    date,
    setDate,
  }
}
