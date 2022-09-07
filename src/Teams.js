import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';


const Teams = () => {



const[teams,setTeams]=useState([])
const[count,setCount]=useState([])
const[pdata,setData] = useState([])
// const[city,setCIty]=useState([])

useEffect (()=>{
  axios
  .get(" https://www.balldontlie.io/api/v1/teams")
  .then((res)=>{
    setTeams(res.data.data)
  })

},[])

function getData(e){
  setData(e.target.value)
  // const text = "e.taget.value"

}

const disp=(e)=>{
console.log("hello")

setTeams(item=>item.sort((a,b)=>a.city>b.city?-1:1 ))
setCount(item=>item-1)

}

const disp1=()=>{
  setTeams(item=>item.sort((a,b)=>a.conference>b.conference?-1:1 ))
setCount(item=>item-1)

  
}

const disp2=()=>{
  setTeams(item=>item.sort((a,b)=>a.id>b.id?1:-1 ))
setCount(item=>item-1)

  
}
    
  return (
    
    <>
    <div className='team_bg'>    
    <div className='checkbox'>
   <span className='teambtn' onClick={disp}>CITY</span>
   <span className='teambtn' onClick={disp1}>CONFERENCE</span>
   <span className='teambtn' onClick={disp2}>ID</span>
   </div>


   <div className='find'>
        {/* <h1>Get Input Box Value</h1> */}
        <input type="text" placeholder='west/east' onChange={getData}/>
        <h3>choose teams from west or east conference  {pdata}</h3>

    </div>
    
    <div className='grid' >

      {
        teams
        .filter((players)=>{
          const {conference} = players;
          if(pdata == ""){
              return players
          }
          else if(players.conference.toLowerCase().includes(pdata.toLowerCase())){
              return players
          }
    
      })
        .map((team)=>{

          const {name,conference,id,city} = team;
          return(
            <>

    
           <NavLink to = {"/t_detail/"+id}>
             <div className='teams_nba'>
              
            <h1>{name}</h1>
            <h1>{conference}</h1>
            <h1>{id}</h1>
            </div>
            </NavLink>

            
            </>
          )
        })



      }    
    </div>
    </div>

    </>
  
  )
}

export default Teams











{/* <form action="#" onSubmit={disp}>

<input type="checkbox" onChange={disp} value="city" id="vehicle1"/>
<label for="vehicle1" > city </label>
<br/>
<input type="checkbox" id="vehicle1"/>
<label for="vehicle1"> city </label>
<br/>
<input type="checkbox" id="vehicle1"/>
<label for="vehicle1">Team Name  </label>
<br/>
<br/>
<input type="submit" value="Submit"/>
  </form> */}
