import { useState } from 'react'
const tabs = [
  { label: 'Live', id: 'live', icon: '🟢' },
  { label: 'Graph', id: 'graph', icon: '📈' },
  { label: 'Prediction', id: 'prediction', icon: '🧙🏼‍♂️' }
]

export default init => {
  const [tab, setTabs] = useState(init)
  return {
    tab,
    setTabs,
    tabs
  }
}
