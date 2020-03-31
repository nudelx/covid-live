import { useEffect, useState } from 'react'
import useTimer from './useTimer'
export default () => {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('active')
  const [show, setShow] = useState('grid')
  const timer = useTimer(3600000) // 1 hours

  useEffect(() => {
    getData()
  }, [timer])

  const prepareData = ({ cards, search, sort }) => {
    const cardFiltered = search.length
      ? cards.filter(item => item.country.match(new RegExp(search, 'i')))
      : cards

    return cardFiltered.sort(function(a, b) {
      if (a[sort] > b[sort]) return -1
      if (b[sort] > a[sort]) return 1
      return 0
    })
  }

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

  return {
    cards,
    setCards,
    search,
    setSearch,
    sort,
    setSort,
    show,
    setShow,
    sortedCards: prepareData({ cards, search, sort })
  }
}
