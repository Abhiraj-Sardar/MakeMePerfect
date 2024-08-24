import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Css/UserActivity.css"
import Stepper from './Stepper'
import Button from '@mui/material/Button';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { LineGraph } from './LineGraph';
import Backdrop from '@mui/material/Backdrop';
import streakSound from "../Assets/Audio/coinBag.mp3";
import { StreakBadge } from './StreakBadge';


import { useParams } from 'react-router-dom';
import { DB_ID, COLLECTION_ID, databases } from '../Database/appwrite';
import { Warning } from '../Alert/Warning';
import { Alert } from '@mui/material';

export const UserActivity = () => {

    const { id } = useParams();  // Access the 'id' parameter
    const [streakBtn, setStreakBtn] = useState(false);
    const [backDrop, setBackDrop] = useState(false);
    const pointsAudio = new Audio(streakSound);
    const [doc, setDoc] = useState([]);
    const [lastDate, setLastDate] = useState(0);
    const [lastMonth, setLastMonth] = useState(0);
    const [seriesData,setSeriesData]=useState([]);
    const [xAxis,setXAxis]=useState([]);
    const [showAlert,setShowAlert]=useState(false);

    //better approach to use useEffect while accessing API
    useEffect(() => {
        async function getDoc() {
            const res = await databases.getDocument(DB_ID, COLLECTION_ID, id); //getting all the data from the database
            setDoc(res);
            setSeriesData(res["SeriesData"])
            setXAxis(res["Xaxis"]);
            // console.log(doc);
            // console.log(seriesData);
        }

        getDoc();

    }, [id])

    async function updateDocument(id, day, cstreak, tdd, tmm, tyyyy) {
        var series = doc["SeriesData"];
        var prevIdx=0;

        if(((day-1)-1)<0){
            prevIdx=0
        }
        else{
            prevIdx=(day-1)-1
        }
        series[day - 1] = series[prevIdx]+1;
        var today = tyyyy + "-" + tmm + "-" + tdd;

        await databases.updateDocument(DB_ID, COLLECTION_ID, id, {
            Day: day,
            CurrentStreak: cstreak,
            Date: today,
            SeriesData: series
        });
    }



    const streakEarned = () => {

        var day = doc["Day"];
        var cstreak = doc["CurrentStreak"];

        let ldate = (doc["Date"].split("T"))[0];
        let d = ldate.split("-");

        var ldd = +d.pop();
        var lmm = +d.pop();
        var lyyyy = +d.pop();

        // console.log(lmm)


        let today = new Date();
        // var dd = today.getDate();
        var dd = 1;
        var mm = 9;
        // var mm = today.getMonth() + 1 
        var yyyy = today.getFullYear();

        // console.log(dd,mm,yyyy)
        //Streak Chart Algorithm Designed by Abhiraj Sardar
        if (lmm == mm) {

            if (ldd < dd) {
                let rem = (dd - ldd) - 1;
                if (rem > 0) {
                    day = day + 1 + rem;
                    cstreak = 1;
                } else {
                    day = day + 1 + 0;
                    cstreak = cstreak + 1;
                }
            } else if (ldd == dd) {
                if (day == 0) {
                    day = 1
                    cstreak = 1
                }
                else {
                    //have to enable alerting service
                    // setShowAlert(true);
                }
            }
            else {
                console.log("this part has runned");
            }
        } else {

            dd = dd + 30;
            if (ldd < dd) {
                let rem = (dd - ldd) - 1;
                if (rem > 0) {
                    day = day + 1 + rem;
                    cstreak = 1;
                } else {
                    day = day + 1 + 0;
                    cstreak = cstreak + 1;
                }
            }

            dd = today.getDate();
        }

        var tdd = String(dd).padStart(2, "0");
        var tmm = String(mm).padStart(2, "0");
        var tyyyy = yyyy;

        updateDocument(id, day, cstreak, tdd, tmm, tyyyy);


        //update the values in Database

        pointsAudio.play();
        setStreakBtn(true);
        setBackDrop(true)

    }

    const closeBackDrop = () => {
        setBackDrop(false);
    }

    if (!doc) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <Navbar />
            
            <div className="container-fluid activity-container">
                <h1>{doc["Title"] ? doc["Title"] : "Loading..."}</h1>
                <div className="row">
                    <div className="col-md-6 col-sm-12 streak-chart">
                        <h3><i class="fa-regular fa-calendar"></i> Streak Calendar</h3>
                        <Stepper streak={doc["Streak"]}
                            seriesData={seriesData}

                        />
                        <br />
                        <div className="btn-container">
                            <Button variant="contained"
                                color='secondary'
                                startIcon={<FingerprintIcon />}
                                onClick={streakEarned}
                            // disabled={streakBtn}
                            >
                                Redeem Streak
                            </Button>
                        </div>

                    </div>
                    
                    <div className="col-md-6 col-sm-12 streak-graph">
                        <h3><i class="fa-solid fa-chart-line"></i> Activity Chart</h3>
                        <LineGraph xAxis={xAxis}
                            seriesData={seriesData}
                            />
                    </div>
                </div>
                {/* <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={backDrop}
                    onClick={closeBackDrop}
                >
                    <StreakBadge closeBackDrop={closeBackDrop}/>
                </Backdrop> */}
            </div>

        </>
    )
}
