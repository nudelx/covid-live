import React from 'react'
import './App.css'
import CovidBoard from './components/covidBoard'
import { localStorageRefresh } from './utils/localStorageToken'
import useTheme from './hooks/useTheme'

localStorageRefresh('bee66946449a')

function App() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="App">
      <div
        className="themeToggle"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      ></div>
      <header className={`App-header ${theme}`}>
        <CovidBoard />
      </header>
    </div>
  )
}

export default App
