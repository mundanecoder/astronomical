import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios';
import Players from './Players';

const Data = () => {

    const [myData, setBalls] = useState([])
    const[pdata,setData] = useState([])

    function getData(e){
      setData(e.target.value)
      // const text = "e.taget.value"

  }




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
          

      <div className='find'>
        {/* <h1>Get Input Box Value</h1> */}
        <input type="text" placeholder='search players' onChange={getData}/>
        <h3>You are looking for  {pdata}</h3>

    </div>

    <div className='sort'>
            <button className='item'>position</button>
            <button className='item'>city</button>
          </div>
        
        
     <div className='grid'>
    { 
    myData
    .filter((players)=>{
      const {first_name,id,last_name} = players;
      if(pdata == ""){
          return players
      }
      else if(players.first_name.toLowerCase().includes(pdata.toLowerCase())){
          return players
      }

  })
    .map((players) => {
    const {id,first_name,team,position,last_name} = players;
    
    return (
      
      <div className='profile' key={id}>
        <span className='name'>{first_name.toUpperCase()} {last_name.toUpperCase()}</span><br/>
        <span className='name'>Position : {position}</span>
        <p className='pos'>{JSON.stringify(team.city)}</p>
        <p className='pos1'>{JSON.stringify(team.name)}</p>
        {/* <p className='pos'>{JSON.stringify(team.)}</p> */}
        
        {/* <p>{team}</p> */}
      
      </div>)
      
      
      
    })} 
    
    
    </div>
      </>
    ); 



}
export default Data