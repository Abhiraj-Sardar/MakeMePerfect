import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import "./Css/Stepper.css"
const Stepper = () => {
    return (
        <div className="container streak-container">
            {
                [...Array(100)].map((item,i) => {
                    let day=`Day ${i+1}`
                    return (
                        <Tooltip title={day} placement='top'>
                        <div className="day-box" style={6>i?{backgroundColor:"var(--glow-green)"}:{backgroundColor:"rgba(196, 209, 209, 0.773)"}}>

                        </div>
                        </Tooltip>
                    )
                })
            }

        </div>
    )
}

export default Stepper