import { useEffect, useState, useCallback } from 'react'
import useTimer from './useTimer'
import { filterCards, handleError } from '../utils/utils'

export default () => {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('active')
  const [loading, setLoading] = useState('false')

  const timer = useTimer(3600000) // 1 hours
  const [error, setError] = useState(null)
  const [world, setWorld] = useState(null)

  const getData = useCallback(
    () =>
      setLoading(true) ||
      fetch('https://coronavirus-19-api.herokuapp.com/countries/')
        .then((res) => res.json())
        .then(filterCards(setWorld))
        .then(setCards)
        .then(() => setLoading(false))
        .then(() => (error && setError(null)) || setLoading(false))
        .catch(handleError(setError) || setLoading(false)),
    [error]
  )

  const prepareData = ({ cards, search, sort }) => {
    const cardFiltered = search.length
      ? cards.filter((item) => item.country.match(new RegExp(search, 'i')))
      : cards

    return cardFiltered.sort(function(a, b) {
      if (a[sort] > b[sort]) return -1
      if (b[sort] > a[sort]) return 1
      return 0
    })
  }
  useEffect(() => {
    getData()
  }, [getData, timer])

  return {
    error,
    cards,
    setCards,
    search,
    setSearch,
    sort,
    setSort,
    world,
    loading,
    sortedCards: prepareData({ cards, search, sort }),
  }
}
