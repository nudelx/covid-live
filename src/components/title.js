import React from 'react'
export default () => {
  return (
    <div className="main-title">
      <div>Covid-19 Live Dashboard</div>
      <div className="sub-title lineHeight">
        by <a href="https://github.com/nudelx">Nudelman Alex</a>{' '}
        <a href="https://github.com/nudelx/covid-live">
          <div className="github"></div>
        </a>
      </div>
      <div className="sub-title-2">
        DataSource:{' '}
        <a href="https://www.worldometers.info">www.worldometers.info</a> with{' '}
        <a href="https://github.com/javieraviles/covidAPI">API</a> by{' '}
        <a href="https://github.com/javieraviles">Javier Aviles</a>
      </div>
      <div className="sub-title-2">
        Prediction Data: by{' '}
        <a href="https://www.linkedin.com/in/anton-shorsh/">Anton Shorsh</a>
      </div>
    </div>
  )
}
