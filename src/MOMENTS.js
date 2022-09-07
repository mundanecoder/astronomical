import React from 'react'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MOMENTS = () => {


  const location = useLocation();

  console.log(location)
  // const Params = useParams();
  // const {name}=Params

  // console.warn(name)
  return (
    <div>
        {/* <h1>
            lets have some best MOMENTS of <span>{location.pathname}</span>
        </h1> */}
    </div>
  )
}

export default MOMENTS;
