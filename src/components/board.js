import React from 'react'
import Error from './error'
import SearchSort from './searchSort'
import tabViews from './tabsView'
import { tabNames } from '../utils/tabNames'
require('../utils/firebase')

export default ({
  tab,
  search,
  setSearch,
  sort,
  setSort,
  sortedCards,
  error,
  yesterday,
}) => {
  return (
    <div className="board light">
      {tab !== tabNames.prediction && (
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
