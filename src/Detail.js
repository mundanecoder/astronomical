import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState ,useEffect} from 'react';

import Button from '@mui/material/Button';

const Detail = () => {

    const[details,setDetail]=useState([])

    useEffect(()=>{
        axios
        .get("https://www.balldontlie.io/api/v1/players")
        .then((res)=>
        // console.log(res.data.data)
         setDetail(res.data.data)
        );
    },[])



    const navigate = useNavigate()
    const previous = ()=>{
        navigate(-1)
    }

    const nextFunc=(e)=>{
        console.log("hello")
        const n =15;
        
        

        // console.log(e.target.id)
        axios
        .get("https://www.balldontlie.io/api/v1/players")
        .then
        ((res)=> 
        console.log(res.data.data["id"])
        // setDetail(res.data.data.id.value["id=={}"])
        )
    }

    const prevFunc = (e)=>{
        console.log(e.target.id)
    }

  return (
    <>
    
        <Button variant='contained' onClick={previous}>To-Gallery-view</Button>


    <div className='grid1'>
        {
            details.slice(0,1).map((item)=>{

                const {id,first_name,team,position,last_name} = item;
                return (
                    <>
                    <button className='btn' onClick={prevFunc}>previous</button>
                     <div className='details'>
                        <h1 className='pname'>{first_name.toUpperCase()} {last_name.toUpperCase()}</h1>
                        <p className='description'> I play the position {position}, i play for {JSON.stringify(team.name)} ,of city {JSON.stringify(team.city)} and my division is {JSON.stringify(team.division)}
                        
                        </p>
                        
                        
                    </div> 
                    <button className='btn' onClick={nextFunc}>next</button>
                    
                    </>
                )
            })
        

        }
    </div> 



<div>

</div>

    </>
  )
}

export default Detail