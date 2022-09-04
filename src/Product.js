import React from 'react'
import { Params } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Product ({match})  {
  // const {name} = useParams()
  return (
    <div>
        <h1>
            user {match.params.name } page
        </h1>
    </div>
  )
}

export default Product