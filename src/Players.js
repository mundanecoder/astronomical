import React from 'react'
import logo from "./nba.png"
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Players = () => {
    const location = useLocation();

    console.log(location)
  return (
    <div>

    <div className='Balls'>
        
        
    </div>
        <div className='navbar'>
                
            <li className='logo' >

                <span className='nba'><img className='logo_img' src={logo}/>NBA</span>
            </li>
            

        <nav>
            <div className='container'>
                <li className='ele'>
                <NavLink className="navL" to={{
                    pathname:'/',
                    state : {say : "hello !"}
                }}>GALLERY</NavLink >
                    
                </li>
                <li className='ele'>
                <NavLink className="navL" to="/list">LIST-VIEW</NavLink >
                    
                </li>
                <li className='ele'>
                <NavLink className="navL" to="/teams">TEAMS</NavLink>
                </li>
                
                {/* <li className='ele'> */}
                {/* <NavLink className="navL" to="/info">VIEW</NavLink> */}
                {/* </li> */}
                {/* <li className='ele'>  */}
                {/* <NavLink className="navL" to="/hof"> ALL-STARS</NavLink> */}
                   
                {/* </li>  */}
                
            </div>
        </nav>
        </div>
    </div>
  )
}

export default Players