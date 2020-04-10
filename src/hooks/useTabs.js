import { useState } from 'react'

export default () => {
  const [tab, setTabs] = useState('live')
  return {
    tab,
    setTabs
  }
}
