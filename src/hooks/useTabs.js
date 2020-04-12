import { useState } from 'react'
const tabs = [
  { label: 'Live', id: 'live', icon: '⚡️' },
  { label: 'Graph', id: 'graph', icon: '📈' }
]
if (localStorage.getItem('anthon')) {
  tabs.push({ label: 'Prediction', id: 'prediction', icon: '🧙🏼‍♂️' })
}

export default init => {
  const [tab, setTabs] = useState(init)
  return {
    tab,
    setTabs,
    tabs
  }
}
