import { useState } from 'react'
export default () => {
  const [theme, setTheme] = useState('dark')
  return { theme, setTheme }
}
