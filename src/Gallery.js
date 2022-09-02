import React from 'react'
import Data from './Data';
// import Data from 'Data'

const Gallery = () => {
  return (
    <>
    <div className='searchBox'>

    <input className='search_player' type="text" placeholder='search players'></input>
    </div>
    <Data/>
    {/* <div className='Gal_bg'>Gallery</div> */}
    </>
  )
}

export default Gallery