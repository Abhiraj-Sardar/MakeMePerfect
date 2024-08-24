import React, { useEffect } from 'react'
import "./Css/Card.css"
import { NavLink } from 'react-router-dom'

export const Card = (props) => {

    return (
        
        <NavLink className="card-container" to={props.dest}>
            <h2>🚀{props.title}</h2>
            <div className="progress-container">
                <div className="circular-progress" style={{background:`conic-gradient(var(--glow-green) ${(props.day/props.target) * 360}deg, #ededed 0deg)`}}>
                    <span className="progress-value">{props.day}/{props.target}</span>
                </div>
            </div>
            <i className="fa-solid fa-code"></i>
            <i className="fa-solid fa-diagram-project"></i>
            <i class="fa-solid fa-bug"></i>
            <i class="fa-solid fa-code-merge"></i>
            <i class="fa-solid fa-terminal"></i>
            <i class="fa-solid fa-cube"></i>
        </NavLink>
    )
}
