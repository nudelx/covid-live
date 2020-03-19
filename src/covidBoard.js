import React, { useEffect, useState } from 'react'
import Card from './card'
import useTimer from './useTimer'
import Header from './header'
import Chart from './chart'

export default () => {
  const [cards, setCards] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('active')
  const [show, setShow] = useState('grid')

  const options = [
    'active',
    'cases',
    'critical',
    'deaths',
    'todayCases',
    'todayDeaths'
  ]

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

  const cardFiltered = search.length
    ? cards.filter(item => item.country.match(new RegExp(search, 'i')))
    : cards
  return (
    <div>
      <Header
        onChangeSearch={setSearch}
        search={search}
        sort={sort}
        onChangeSort={setSort}
        options={options}
        setShow={setShow}
        show={show}
      />
      <div>
        {show === 'grid' ? (
          cardFiltered
            .sort(function(a, b) {
              if (a[sort] > b[sort]) return -1
              if (b[sort] > a[sort]) return 1
              return 0
            })
            .map((c, index) => (
              <Card key={c.country} {...c} index={index + 1} />
            ))
        ) : (
          <Chart data={cardFiltered} />
        )}
      </div>
    </div>
  )
}
