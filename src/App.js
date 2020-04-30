import React from 'react'
import './App.css'
import CovidBoard from './components/covidBoard'
import { localStorageRefresh } from './utils/localStorageToken'

localStorageRefresh('bee66946449a')

function App() {
  return (
    <div className="App light">
      <header className="App-header">
        <CovidBoard />
      </header>
    </div>
  )
}

export default App
