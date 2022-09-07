import React from 'react'
import Data from './Data';
import List from './List'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import Data from 'Data'
import Detail from './Detail';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Gallery = () => {

  const location = useLocation()

  return (
    <>
    <div className='gal_bg'>

    {/* <BrowserRouter> */}
  <div className='gal_nav'>
    {/* <span className='G_view'><NavLink to="/">Gallery</NavLink>  </span> */}
  
{/* <h1>hello {location.pathname}</h1> */}
    {/* <span className='G_view'><NavLink to={`/detail/${pageno}/${playerId} `}>Detailed_View</NavLink></span> */}
    
    
  </div>
    <Data/>
    </div>
    {/* </BrowserRouter> */}

    </>
  )
}

export default Gallery