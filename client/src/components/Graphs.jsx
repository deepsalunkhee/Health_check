import React from 'react'
import { BarGraph } from './BarGraph'
import { LineGraph } from './LineGraph'
import './Graphs.css'
import { RadarGraph } from './RadarGraph'
import { CurvedLineGraph } from './CurvedLineGraph'

const Graphs = () => {
  return (
    <div className="graphcontainer">
      <BarGraph/>
      <LineGraph/>
      <RadarGraph/>
      <CurvedLineGraph/>
    </div>
  )
}

export default Graphs

