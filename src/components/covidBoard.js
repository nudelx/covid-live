import React from 'react'

import Header from './header'
import useCovidHook from '../hooks/useCovidHook'
import HotLine from './hotLine'
import Title from './title'
import useTabs from '../hooks/useTabs'
import Tabs from './tabs'
import Board from './board'
import Spinner from './spinner'
import { tabNames } from '../utils/tabNames'
import Calendar from './calendar'

export default () => {
  const { tab, setTabs, tabs } = useTabs(tabNames.live)
  const {
    search,
    setSearch,
    sort,
    setSort,
    sortedCards,
    error,
    world,
    loading,
  } = useCovidHook()

  if (loading) return <Spinner />

  return (
    <div>
      <Header>
        <Title />
        <Calendar />
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

      {tab !== tabNames.prediction && <HotLine world={world} />}
    </div>
  )
}
