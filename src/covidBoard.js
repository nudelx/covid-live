import React from 'react'

import Header from './header'
import useCovidHook from './hooks/useCovidHook'
import WorldCard from './worldCard'
import Title from './title'
import useTabs from './hooks/useTabs'
import Tabs from './tabs'
import Board from './board'

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

  const { tab, setTabs, tabs } = useTabs('live')
  return (
    <div>
      <Header>
        <Title />
        <Tabs tab={tab} setTabs={setTabs} tabs={tabs} />
      </Header>
      <Board
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        sortedCards={sortedCards}
        error={error}
        tab={tab}
      />
      <WorldCard world={world} />
    </div>
  )
}
