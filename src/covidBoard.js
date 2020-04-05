import React from 'react'
import Card from './card'
import Header from './header'
import Chart from './chart'
import useCovidHook from './useCovidHook'
import Error from './error'
import WorldCard from './worldCard'

export default () => {
  const {
    search,
    setSearch,
    sort,
    setSort,
    show,
    setShow,
    sortedCards,
    error,
    world,
  } = useCovidHook()
  return (
    <div>
      <Header
        onChangeSearch={setSearch}
        search={search}
        sort={sort}
        onChangeSort={setSort}
        setShow={setShow}
        show={show}
      ></Header>
      <div>
        {error && <Error error={error} />}
        {show === 'grid' ? (
          sortedCards.map((c, index) => (
            <Card key={c.country} {...c} index={index + 1} />
          ))
        ) : (
          <Chart data={sortedCards} sortedKey={sort} />
        )}
      </div>
      <WorldCard world={world} />
    </div>
  )
}
