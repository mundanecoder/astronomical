import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios';
import Players from './Players';
import { Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';

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
    
    // const sortItem =() =>
    // {
    //   const sortedItem = myData.map((item)=>{
    //     return item.name.sort();
      
    //   })

    //   console.log("helo")
    //   setBalls(sortedItem)

    // }
    

function sortItem(e){

      // const item = e.target.value;
      // if(e.target.value==myData.){
      //   console.log(item)
      // }
      console.log(myData.filter((item)=>{
        const {id} = item

        if(e.target.value == ""){
          // return alert("does not match")
          return
      }
       else if(e.target.value === id){


          console.log("hello",item)
        }
      }))

  
      

}

const display = (e)=>{
  console.log("hello")
console.log( e.target.span.value)
}
    
    
      return  (
    
    
          <>
          

      <div className='find'>
        {/* <h1>Get Input Box Value</h1> */}
        <input type="text" placeholder='search players' onChange={getData}/>
        <h3>You are looking for  {pdata}</h3>

    </div>

    <div className='sort'>
            <input className='item' onChange={sortItem} placeholder= "pos_sort" />
            {/* <button className='item'>city</button> */}
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

    // <NavLink to="/detail"></NavLink>
    
    return (
      
      <NavLink to="/detail"><div className='profile' onClick={display}  key={id}>
        <span className='name'>{first_name.toUpperCase()} {last_name.toUpperCase()}</span><br/>
        {/* <span className='name'>Position : {position}</span> */}
        {/* <p className='pos'>{JSON.stringify(team.city)}</p> */}
        {/* <p className='pos1'>{JSON.stringify(team.name)}</p> */}
        {/* <p className='pos'>{JSON.stringify(team.)}</p> */}
        
        {/* <p>{team}</p> */}
      
      </div>
      </NavLink>
      )
      
      
      
    })} 
    
    
    </div>
      </>
    ); 



}
export default Data