import { useEffect, useState } from 'react'
export default delay => {
  const [time, setTime] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time + 1)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay, time])

  return time
}
