import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState ,useEffect} from 'react';

import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';

const Detail_team = () => {

    const[teams,setTeams]=useState([])
    const[count,setCount]=useState([])
    const params = useParams()

    const navigate = useNavigate()
    const previous = ()=>{
        navigate(-1)
    }




    useEffect (()=>{
        axios
        .get(" https://www.balldontlie.io/api/v1/teams")
        .then((res)=>{
          setTeams(res.data.data)
        })
      
      },[])

      const nextFunc =()=>{
        console.log("next")
        const Pid = teams.map((item,index)=> item.id)
        // console.log(params.id)
        const current_id = teams.findIndex((item =>item.id==params.id))
        // console.log(current_id)
        
        setCount(count=>count+1)
        // console.log(count)
        
        const index=(current_id+count);
        
        
        if(current_id==24){
            return 0
        }


       params.id= Pid[current_id+1]
        

      }

      const prevFunc =()=>{
        console.log("prev")
        const Pid = teams.map((item,index)=> item.id)
    //    console.log(Pid[1])
        // console.log(params.id)
       const current_id = teams.findIndex((item =>item.id==params.id))
        // console.log(current_id)

        setCount(item =>item-1)
        // console.log("hello"+count)
        
        const index=current_id+count;
        // console.log(index)

        if(current_id==0){
            return 0
        }

        params.id= Pid[current_id-1]

        navigate()

      }



    // console.log(params.id)
  return (

    
    <>
    

    <div className='btn_container'>

        <Button variant='contained' onClick={previous}>To-Teams-Gallery-View</Button>
    </div>
    <div className='box_disp'>
        {

            
            teams
            .filter((item)=>{
                if(item.id==params.id){
                    return item
                }
            })
            .map((item)=>{
                const{id,abbreviation,city,conference,full_name,name}=item;

                return(
                    <>
                    <button className='t_bttn' onClick={prevFunc}>prev</button>
                  
                  
                    <div className='T_details'>
                    <h1>{full_name}</h1>
                    <p className='team_description'>In short we are called {abbreviation} ,we represent {city},we are mostyly called <span className='special'>
                    {name}</span> by our fans, 
                    <br/> we belong to the {conference} conference ! </p>

                    <p className='team_description'>Viva-la {name} </p>

                    
                    
                    </div>
                    <button className='t_bttn' onClick={nextFunc}>next </button>
                    </>
                )
            })

    
    
        }
    </div>

    </>
  )
}

export default Detail_team