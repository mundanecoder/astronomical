import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios';
import Players from './Players';
import { Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {Location, useLocation } from 'react-router-dom';

const List = () => {

  var c =0;

    const [myData, setBalls] = useState([])
    const[pdata,setData] = useState([])
    const[count,setCount]=useState([])
    const[pageno,setpageno]=useState(1)

    // const [s ]= useState(0);
    // console.log(s)

    function getData(e){
      setData(e.target.value)
      // const text = "e.taget.value"

  }

  const nextpage =()=>{

    if(pageno==30){
      return 0
    }
    setpageno(item=>item+1)
    // pageno=pageno+1;
    
    // console.log(c)
  }
  const prevPage = ()=>{
    if(pageno==0){
      return 0
    }
    setpageno(item=>item-1)
  }




// console.log(pageno)



    useEffect(()=>{

      
      // console.log("he")
      // console.log(pageno)
      axios
      .get(`https://www.balldontlie.io/api/v1/players/?page=${pageno}&per_page=${25}`)
      // .json()
      .then((res) => 
      setBalls(res.data.data)
      // .get("https://jsonplaceholder.typicode.com/posts")
      );
    
    },[pageno]);
    // console.log("hello")
    // console.log(pageno)
    
    // const sortItem =() =>
    // {
    //   const sortedItem = myData.map((item)=>{
    //     return item.name.sort();
      
    //   })

    //   console.log("helo")
    //   setBalls(sortedItem)

    // }
    

const sortItem=(e)=>{

   
      // console.log(myData.slice(0,4).sort((a,b)=> a.id < b.id?1:-1))
      setBalls(item=>item.sort((a,b)=>a.id>b.id?1:-1))
      setCount(item =>item-1)

  }


  const Des = ()=>{
  //   console.log(myData.sort((a,b)=> a.id<b.id?-1:1))}
    setBalls(item=>item.sort((a,b)=>a.id>b.id?-1:1 ))
    setCount(item =>item-1)}
  //  const location = {
  //     pathname: '/detail/${id}',
  //     state: { pagenumber:pageno}
  //   }
    
 



const display = (e)=>{
  // console.log(e.target)
  // console.log(myData.map(item=> item.id))
}
    
    
      return  (
    
    
          <>
          <div className='list_bg'>
          
          

      <div className='find'>
        {/* <h1>Get Input Box Value</h1> */}
        <input type="text" className="inputL" placeholder='search players' onChange={getData}/>
        <h3>You are looking for  {pdata}</h3>

    </div>

    <div className='pages_btn'>


    <button onClick={prevPage}>prev-page</button>
    <button onClick={nextpage}>next-page</button>
    </div>

    <div className='sort'>
            <button className='item' onClick={sortItem} placeholder= "pos_sort" >ASC</button>
            <button className='item' onClick={Des}>DES</button>
          </div>
        
        
     <div className='grid_list'>
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
    const {first_name,team,position,last_name} = players;
      const playerId = players.id
      // console.log(playerId)


    // <NavLink to="/detail"></NavLink>
    
    // console.log(pageno)
    return (
      
      <NavLink to = {`/detail/${pageno}/${playerId} `} ><div className='list_profile'  key={myData.id}>
        <span className='name'>{first_name.toUpperCase()} {last_name.toUpperCase()}</span><br/>
        <span className='name'>ID: {playerId}</span>
        {/* <p className='pos'>{JSON.stringify(team.city)}</p> */}
        {/* <p className='pos1'>{JSON.stringify(team.name)}</p> */}
        {/* <p className='pos'>{JSON.stringify(team.)}</p> */}
        
        {/* <p>{team}</p> */}
      
      </div>
      </NavLink>
      )
      
      
      
    })} 
    
    
    </div>


    </div>
      </>
    ); 



}

export default List