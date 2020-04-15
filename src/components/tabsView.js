import React from 'react'
import Card from './card'
import Chart from './chart'
import PredictionBoard from './prediction/predictionBoard'
import { tabNames } from '../utils/tabNames'

export default {
  [tabNames.live]: ({ sortedCards }) =>
    sortedCards.map((c, index) => (
      <Card key={c.country} {...c} index={index + 1} />
    )),
  [tabNames.graph]: ({ sortedCards, sort }) => (
    <Chart data={sortedCards} sortedKey={sort} />
  ),
  [tabNames.prediction]: (props) => <PredictionBoard {...props} />,
}
