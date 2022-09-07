import React from 'react'
import {useEffect,useState} from 'react'
import axios from 'axios';
import Players from './Players';
import { Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {Location, useLocation } from 'react-router-dom';
import propic from './card.jpg'
// import List from './List'

const Data = () => {

  var c =0;

    const [myData, setBalls] = useState([])
    const[pdata,setData] = useState([])
    const[count,setCount]=useState([])
    const[pageno,setpageno]=useState(1)


    //// using hooks useState to store api data and update accordingly
    

    function getData(e){
      setData(e.target.value)
      // const text = "e.taget.value"

  }

  const nextpage =()=>{

    if(pageno==30){   //limiting the pages input to display on clicking
      return 0
    }
    setpageno(item=>item+1)
    // pageno=pageno+1;
    
    // console.log(c)
  }
  const prevPage = ()=>{
    if(pageno==0){
      return 0    //limiting the pages input to display on 
    }
    setpageno(item=>item-1)
  }

  




// console.log(pageno)



    useEffect(()=>{

      
      axios
      .get(`https://www.balldontlie.io/api/v1/players/?page=${pageno}&per_page=${25}`)
      .then((res) => 
      setBalls(res.data.data)
      );

      // passed parameters usig useparam hook using route(Pageno)
    
    },[pageno]);
    
    

const sortItem=(e)=>{

   
      
      setBalls(item=>item.sort((a,b)=>a.id>b.id?1:-1))
      setCount(item =>item-1)

      /// sorting array with compare method (sort) to display value sorted by specific property

  }


  const Des = ()=>{


      /// sorting array with compare method (sort) to display value sorted by specific property
  
    setBalls(item=>item.sort((a,b)=>a.id>b.id?-1:1 ))
    setCount(item =>item-1)}
  //  const location = {
  //     pathname: '/detail/${id}',
  //     state: { pagenumber:pageno}
  //   }
    
 



    
      return  (
    
    
          <>
          
          

      <div className='find'>

      {/* <span className='G_view'><NavLink to={`/detail/${pageno}/${id} `}>Detailed_View</NavLink></span> */}
        {/* <h1>Get Input Box Value</h1> */}
        <input type="text" placeholder='search players' onChange={getData}/>
        <h3 className='s_txt'>You are looking for  {pdata}</h3>

    </div>

    <div className='pages_btn'>



    <button onClick={prevPage}>prev-page</button>
    <button onClick={nextpage}>next-page</button>
    </div>

    <div className='sort'>
            <span className='item' onClick={sortItem} placeholder= "pos_sort" >ASC</span>
            <span className='item' onClick={Des}>DES</span>
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
    const {first_name,team,position,last_name} = players;
      const playerId = players.id
      // console.log(playerId)


    // <NavLink to="/detail"></NavLink>
    
    // console.log(pageno)
    return (
      
      
      <NavLink to = {`/detail/${pageno}/${playerId} `} >
        <div className='profile'  key={myData.id}>
        <div className='data_id'>
          <span className='name_id'>{playerId}</span>
        </div>
        <div className='data_page'>
          <div className='profile_img'>

          {/* <img className='pro_pic' src=''>{propic}</img> */}
          
          </div>
          <div className='data_name'>

          <span className='name'>{first_name.toUpperCase()} {last_name.toUpperCase()}</span><br/>

          </div>
        </div>
        </div>
      </NavLink>
    )
    
  })} 
    </div>
      </>
  ); 

}
      
export default Data



      
      
      
    
    


    








        {/* <p className='pos'>{JSON.stringify(team.city)}</p> */}
        {/* <p className='pos1'>{JSON.stringify(team.name)}</p> */}
        {/* <p className='pos'>{JSON.stringify(team.)}</p> */}
        
        {/* <p>{team}</p> */}