import React from 'react'
import { useParams } from 'react-router-dom';

const MOMENTS = () => {
  const Params = useParams();
  const {name}=Params

  console.warn(name)
  return (
    <div>
        <h1>
            lets have some best MOMENTS of {name}
        </h1>
    </div>
  )
}

export default MOMENTS;
