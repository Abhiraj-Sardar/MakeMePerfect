import React, { useState,useEffect } from 'react'
import { Card } from './Card'
import "./Css/Sprints.css"
import { DB_ID, COLLECTION_ID, databases } from '../Database/appwrite';

export const Sprints = () => {

  const [allSprints,setAllSprints] = useState([]);

  async function getData() {
    const res = await databases.listDocuments(DB_ID, COLLECTION_ID); //getting all the data from the database
    setAllSprints(res.documents);
    // console.log(allSprints);
    
  }

  useEffect(()=>{
      getData();
  },[])

  if(!allSprints){
    return( 
      <div className="sprint-container container-fluid">
      Loading...
      </div>);
  }
  
  return (
    <div className="sprint-container container-fluid">
      {
        allSprints.map((sprint,i)=>{
          return(
            <Card
              key={sprint["$id"]} 
              dest={sprint["$id"]} 
              title={sprint["Title"]}
              target={sprint["Streak"]}
              day={sprint["Day"]}
            />
          )
        })
      }
    </div>
  )
}
