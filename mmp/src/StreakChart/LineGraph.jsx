import React, { useState } from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
export const LineGraph = (props) => {
  
  
  return (
    <LineChart
      xAxis={[{ data: [...props.xAxis].slice(0,props.day) }]}
      series={[
        {
          type:"line",
          data: [...props.seriesData].slice(0,props.day),
          curve: "linear",
          color: "var(--glow-green)",
          valueFormatter: (v, i) => `${v}${i.dataIndex>=0? " streak":" "}`
        },
      ]}
      
      width={500}
      height={300}
      grid={{ vertical: true, horizontal: true, borderColor: "var(--secondary-color)"}}
      margin={{ left: 110 }}
    />
  )
}
