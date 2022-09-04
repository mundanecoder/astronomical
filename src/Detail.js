import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState ,useEffect} from 'react';

import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';

const Detail = () => {

    const[details,setDetail]=useState([])
    const params = useParams()
    // const{id}=Params

    // const pid = ;

    // console.log(params.id)


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

    const nextFunc=()=>{
        axios
      .get("https://www.balldontlie.io/api/v1/players/<1>")
      // .json()
      .then((res) => console.log(res.data.data)
    //   setBalls(res.data.data)
      // .get("https://jsonplaceholder.typicode.com/posts")
      );
    }

    const prevFunc = (e)=>{
        
    }

  return (
    <>
    
        <Button variant='contained' onClick={previous}>To-Gallery-view</Button>

        <h1>hello </h1>


    <div className='grid1'>
        {
            details
            .filter((item)=>{
                if(item.id==params.id){
                    return details
                }
            })
            .map((item)=>{

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