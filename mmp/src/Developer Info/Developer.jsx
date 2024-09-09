import React from 'react'
import Navbar from '../Navbar/Navbar'
import Switch from '@mui/material/Switch';

import "./Css/Developer.css"
export const Developer = () => {
    return (
        <>
            <Navbar />
            <div className="container-fluid dev-container">
                <div className="row">
                    <div className="col-md-6 img-container">
                        <div className="dev-img">

                        </div>
                    </div>
                    <div className="col-md-6 dev-details">
                        <div className="dev-data">
                            <h3>Hey There, I am <em>Abhiraj Sardar</em> </h3>
                            <p>I am a Software Engineer, I worked at <em>Linde Global</em>, <em>EY-GDS</em>, <em>Codsoft</em> and <em>PCS Global</em>. 
                                As a Fresher I Cracked several companies for Intern positions including <em>Hidoc Dr</em>, <em>Saggifo</em>,
                                 <em> BlueStock Fintech</em>, <em>Webgrity</em> etc companies. 
                            </p>

                            <p>
                                I am Also a <span>Competative Programmer</span> solved <span>200+</span> problems on Leetcode.<br/>
                                <span>4⭐</span> coder at HackerRank and <span>Smart Bengal Hackathon Winner</span>
                            </p>
                            <hr/>
                            <h3>Developer Mode 🛠️</h3>
                            <p>Careful!! If You Enable The developer Mode then you would be able to unlock your Sprints. Hence You will get access to Add Sprint or Delete Sprints. It Does not affect your Important Data.</p>
                            <h5>
                                off <Switch defaultChecked color="warning" /> on
                            </h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
