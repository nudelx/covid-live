import React from 'react'
import Card from './card'
import Header from './header'
import Chart from './chart'
import useCovidHook from './hooks/useCovidHook'
import useView from './hooks/useView'
import Error from './error'
import WorldCard from './worldCard'
import ToolBox from './toolBox'
import SearchSort from './searchSort'

export default () => {
  const {
    search,
    setSearch,
    sort,
    setSort,
    sortedCards,
    error,
    world
  } = useCovidHook()

  const { show, setShow, predShow, setShowPred } = useView('grid')
  console.log('render', predShow)
  return (
    <div>
      <Header
        onChangeSearch={setSearch}
        search={search}
        sort={sort}
        onChangeSort={setSort}
      >
        <ToolBox
          setShowPred={setShowPred}
          setShow={setShow}
          predShow={predShow}
          show={show}
        />
        <SearchSort
          search={search}
          onChangeSearch={setSearch}
          sort={sort}
          onChangeSort={setSort}
        />
      </Header>
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
