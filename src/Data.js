import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios';
import Players from './Players';

const Data = () => {

    const [myData, setBalls] = useState([])

    useEffect(()=>{
      axios
      .get("https://www.balldontlie.io/api/v1/players")
      // .json()
      .then((res) => 
      setBalls(res.data.data)
      // .get("https://jsonplaceholder.typicode.com/posts")
      );
    
    },[]);
    
    // const team = JSON.stringify(team)
    
    
    
      return  (
    
    
          <>
        
        
     <div className='grid'>
    { 
    myData.map((players) => {
    const {id,first_name,team,position,last_name} = players;
    
    return (
      
      <div className='profile' key={id}>
        <span className='name'>{first_name.toUpperCase()} {last_name.toUpperCase()}</span><br/>
        <span className='name'>Position : {position}</span>
        <p className='pos'>{JSON.stringify(team.city)}</p>
        <p className='pos'>{JSON.stringify(team.name)}</p>
        {/* <p className='pos'>{JSON.stringify(team.)}</p> */}
        
        {/* <p>{team}</p> */}
      
      </div>)
      
      
      
    })} 
    
    
    </div>
      </>
    ); 



}
export default Data