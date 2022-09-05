import React from 'react'
import Data from './Data';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Data from 'Data'
import Detail from './Detail';
import { NavLink } from 'react-router-dom';

const Gallery = () => {
  return (
    <>
    {/* <BrowserRouter> */}
  <div className='gal_nav'>
    {/* <span className='G_view'><NavLink to="/">Gallery</NavLink>  </span> */}
  

    {/* <span className='G_view'><NavLink to="/detail">Detailed_View</NavLink></span> */}
    
    
  </div>
    <Data/>
    {/* </BrowserRouter> */}

    </>
  )
}

export default Gallery