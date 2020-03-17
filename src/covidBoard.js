import React, { useEffect, useState } from 'react'
import Card from './card'
import useTimer from './useTimer'

export default () => {
  const [cards, setCards] = useState([])
  const getData = () =>
    fetch('https://coronavirus-19-api.herokuapp.com/countries/')
      .then(res => res.json())
      .then(res =>
        setCards(
          res.sort(function(a, b) {
            return a.active > b.active
          })
        )
      )
  const timer = useTimer(14400000) // 4 hours

  useEffect(() => {
    getData()
  }, [timer])

  return (
    <div>
      <div> Covid-19 Live Dashboard</div>
      {cards.map((c, index) => (
        <Card key={c.country} {...c} index={index + 1} />
      ))}
    </div>
  )
}
