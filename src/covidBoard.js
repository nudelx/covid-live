import React, { useEffect, useState} from 'react'



export default () => {


  const [cards, setCards]  = useState([])

  useEffect(() => {
    fetch('https://coronavirus-19-api.herokuapp.com/countries/').then(res => res.json()).then(setCards)
  },[])

  return (<div>
    <ul>
      {cards.map(item => (<li className="country">{item.country}</li>)
      )}
    </ul>
  </div>)

}