import React from 'react'
import { Card } from './Card'
import "./Css/Sprints.css"
export const Sprints = () => {
  return (
    <div className="sprint-container container-fluid">
        <Card dest={"/sprint100"}/>
        <Card dest={"/sprint100"}/>
    </div>
  )
}
