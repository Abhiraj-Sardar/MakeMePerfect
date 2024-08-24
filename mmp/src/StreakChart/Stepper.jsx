import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import "./Css/Stepper.css"
const Stepper = (props) => {
    // console.log(props.seriesData);
    
    return (
        <div className="container streak-container">
            {
                [...Array(props.streak)].map((item,i) => {
                    let day=`Day ${i+1}`
                    return (
                        <Tooltip title={day} placement='top'>
                        <div className="day-box" style={(props.seriesData[i]!=0)?{backgroundColor:"var(--glow-green)"}:{backgroundColor:"rgba(196, 209, 209, 0.773)"}}>

                        </div>
                        </Tooltip>
                    )
                })
            }

        </div>
    )
}

export default Stepper