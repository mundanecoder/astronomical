import React from 'react'
import { useParams } from 'react-router-dom';
import { useLocation , useNavigate} from 'react-router-dom';

const MOMENTS = () => {

  const navigate = useNavigate();
  const sendData = (e)=>{
    console.log("clicked")
    navigate("/hof",{
      state:{
        hi:"hello",
        age:29
      }
    })
  }
  // const stateTopass = ()=>{
  //   num : 20

  // };


  return (
    <div>
         <h1>
            lets have some best MOMENTS of 
        </h1> 
            <span onClick={sendData} >BUTTON</span>
    </div>
  )
}

export default MOMENTS;
