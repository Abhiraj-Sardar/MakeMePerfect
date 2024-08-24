import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
export const LineGraph = (props) => {
  
  return (
    <LineChart
      xAxis={[{ data: [...props.xAxis] }]}
      series={[
        {
          type:"line",
          data: [...props.seriesData],
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
