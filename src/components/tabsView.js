import React from 'react'
import Card from './card'
import Chart from './chart'
import PredictionBoard from './prediction/predictionBoard'

export default {
  live: ({ sortedCards }) =>
    sortedCards.map((c, index) => (
      <Card key={c.country} {...c} index={index + 1} />
    )),
  graph: ({ sortedCards, sort }) => (
    <Chart data={sortedCards} sortedKey={sort} />
  ),
  prediction: props => <PredictionBoard {...props} />
}
