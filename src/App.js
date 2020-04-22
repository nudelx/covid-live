import React from 'react'
import './App.css'
import CovidBoard from './components/covidBoard'
import { localStorageRefresh } from './utils/localStorageToken'
import ConfidenceChart from './components/prediction/confidenceChart'
localStorageRefresh('bee66946449a')

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ConfidenceChart />
        <CovidBoard />
      </header>
    </div>
  )
}

export default App
