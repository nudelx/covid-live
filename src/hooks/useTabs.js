import { useState } from 'react'
const tabs = [
  { label: 'Live', id: 'live' },
  { label: 'Graph', id: 'graph' },
  { label: 'Prediction', id: 'prediction' }
]

export default init => {
  const [tab, setTabs] = useState(init)
  return {
    tab,
    setTabs,
    tabs
  }
}
