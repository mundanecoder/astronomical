import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const HOF = () => {
  const location=useLocation()
  console.log(location)

  // const[stats,setStats]= useState([])


  // useEffect(()=>{
  //   axios
  //   .get("https://www.balldontlie.io/api/v1/stats")
  //   .then((res) => 
  //   setStats(res.data.data)
  
  //   );
  
  // },[]);


  return (
{/* <h1>hello {location.pathname}</h1> */}
    // <>
    // <div>
    //   {
    //     stats
    //     .map((item)=>{
    //       const{id,date,home_team_score,postseason,game,visitor_team}=item;
    //       return (

    //         <>
    //         <div>

    //           <h1>{JSON.stringify(game.id)}</h1>
    //           <h1>{game.home_team_score}</h1>
    //         <h1>{JSON.stringify(visitor_team.name)}</h1>

    //         </div>
    //         </>
    //       )
    //     })

    //   }
    //   </div>
    // </>
  )
}

export default HOF