import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Css/UserActivity.css"
import Stepper from './Stepper'
import Button from '@mui/material/Button';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { LineGraph } from './LineGraph';
import Backdrop from '@mui/material/Backdrop';
import streakSound from "../Assets/Audio/coinBag.mp3";
import { StreakBadge } from './StreakBadge';
export const UserActivity = () => {

    const [streakBtn, setStreakBtn] = useState(false);
    const [backDrop, setBackDrop] = useState(false);

    const pointsAudio = new Audio(streakSound);

    const streakEarned = () => {
        pointsAudio.play();
        setStreakBtn(true);
        setBackDrop(true)
    }

    const closeBackDrop=()=>{
        setBackDrop(false);
    }
    return (
        <>
            <Navbar />
            <div className="container-fluid activity-container">
                <h1>50 Days Coding Challenge</h1>
                <div className="row">
                    <div className="col-md-6 col-sm-12 streak-chart">
                        <h3><i class="fa-regular fa-calendar"></i> Streak Calendar</h3>
                        <Stepper />
                        <br />
                        <div className="btn-container">
                            <Button variant="contained"
                                color='secondary'
                                startIcon={<FingerprintIcon />}
                                onClick={streakEarned}
                                disabled={streakBtn}
                            >
                                Redeem Streak
                            </Button>
                        </div>

                    </div>
                    <div className="col-md-6 col-sm-12 streak-graph">
                        <LineGraph />
                    </div>
                </div>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={backDrop}
                    onClick={closeBackDrop}
                >
                    <StreakBadge closeBackDrop={closeBackDrop}/>
                </Backdrop>
            </div>

        </>
    )
}
