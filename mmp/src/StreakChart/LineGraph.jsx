import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
export const LineGraph = () => {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30] }]}
      series={[
        {
          data: [1, 2, 3, 4, 5, 6, 7,8,9,0,1,2,3,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0],
          curve: "linear",
          color: "var(--glow-green)",

        },
      ]}

      width={500}
      height={300}
      grid={{ vertical: true, horizontal: true, borderColor: "var(--secondary-color)"}}
      margin={{ left: 0, right: 0, top: 20, bottom: 20 }}
    />
  )
}
