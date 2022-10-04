import React from 'react'
import { getBarWidth, getStatColorRank } from '../utils'

const Bar = ({ baseStat }) => {
  const color = getStatColorRank(baseStat)
  const width = getBarWidth(baseStat)
  return (
    <div style={{
      height: "0.75rem",
      borderRadius: "2px",
    
      backgroundColor: color,
      width
    }}></div>
  )
}

export default Bar