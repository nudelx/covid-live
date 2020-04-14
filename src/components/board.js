import React from 'react'
import Error from './error'
import SearchSort from './searchSort'
import tabViews from './tabsView'
require('../utils/firebase')

export default ({
  tab,
  search,
  setSearch,
  sort,
  setSort,
  sortedCards,
  error
}) => {
  return (
    <div className="board">
      {tab !== 'prediction' && (
        <SearchSort
          search={search}
          onChangeSearch={setSearch}
          sort={sort}
          onChangeSort={setSort}
        />
      )}
      {error && <Error error={error} />}
      {tabViews[tab]({ sortedCards, sort })}
    </div>
  )
}
