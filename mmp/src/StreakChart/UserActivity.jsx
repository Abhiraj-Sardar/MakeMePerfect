import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Css/UserActivity.css"
import Stepper from './Stepper'
import Button from '@mui/material/Button';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { LineGraph } from './LineGraph';
import streakSound from "../Assets/Audio/coinBag.mp3";
export const UserActivity = () => {
    
    const [streakBtn,setStreakBtn]=useState(false);

    const pointsAudio = new Audio(streakSound);
    
    const streakEarned=()=>{
        pointsAudio.play();
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid activity-container">
                <h1>50 Days Coding Challenge</h1>
                <div className="row">
                    <div className="col-md-6 col-sm-12 streak-chart">
                        <Stepper />
                        <br />
                        <div className="btn-container">
                        <Button variant="contained" 
                        color='secondary'
                        startIcon={<FingerprintIcon />}
                        onClick={streakEarned}
                        >
                            Redeem Streak
                        </Button>
                        </div>
                        
                    </div>
                    <div className="col-md-6 col-sm-12 streak-graph">
                        <LineGraph/>
                    </div>
                </div>

            </div>

        </>
    )
}
