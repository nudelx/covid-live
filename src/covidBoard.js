import React, { useEffect, useState } from 'react'
import Card from './card'

export default () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch('https://coronavirus-19-api.herokuapp.com/countries/')
      .then(res => res.json())
      .then(res =>
        setCards(
          res.sort(function(a, b) {
            return a.active > b.active
          })
        )
      )
  }, [])

  return (
    <div>
      {cards.map((c, index) => (
        <Card key={c.country} {...c} index={index} />
      ))}
    </div>
  )
}
