import React from 'react'
import "./Css/Card.css"
import { NavLink } from 'react-router-dom'

export const Card = (props) => {
    return (
        
        <NavLink className="card-container" to={props.dest}>
            <h2>🚀{props.title}</h2>
            <div className="progress-container">
                <div className="circular-progress">
                    <span className="progress-value">0/50</span>
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
