import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios';


const Teams = () => {

const[teams,setTeams]=useState([])

useEffect (()=>{
  axios
  .get(" https://www.balldontlie.io/api/v1/teams")
  .then((res)=>{
    setTeams(res.data.data)
  })

},[])
    
  return (
    <>
    
    <div className='grid' >
      {
        teams.map((team)=>{

          const {name,id,city} = team;
          return(
            <>
            <h1 className='teams_nba'>{name}</h1>
            
            </>
          )
        })



      }    
    </div>
    </>
  )
}

export default Teams