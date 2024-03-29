import { useEffect, useState, useCallback } from 'react'
import useTimer from './useTimer'
import { filterCards, handleError } from '../utils/utils'
import API from '../utils/api'
import useYesterday from './useYesterday'

export default () => {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('active')
  const [loading, setLoading] = useState('false')

  const timer = useTimer(3600000) // 1 hours
  const [error, setError] = useState(null)
  const [world, setWorld] = useState(null)
  const { yesterday } = useYesterday()

  const getData = useCallback(
    () =>
      setLoading(true) ||
      fetch(API.covidAPI_2)
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

    const withStats = yesterday
      ? cardFiltered.map(function(item) {
          const old = yesterday[item.country] || null
          const a = old ? yesterday[item.country][sort] : 0
          const b = item[sort]
          item.stats = a > 0 ? ((b - a) / a) * 100 : 0
          return { ...item }
        })
      : cardFiltered

    return withStats.sort(function(a, b) {
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
