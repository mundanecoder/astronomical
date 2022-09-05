import React from 'react'
import logo from "./nba.png"
import { NavLink } from 'react-router-dom'

const Players = () => {
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
                <NavLink className="navL" to="/">GALLERY</NavLink >
                    
                </li>
                <li className='ele'>
                <NavLink className="navL" to="/teams">TEAMS</NavLink>
                </li>
                {/* <li className='ele'> */}
                {/* <NavLink className="navL" to="/info">INFO</NavLink > */}
                    
                {/* </li> */}
                {/* <li className='ele'> */}
                {/* <NavLink className="navL" to="/info">VIEW</NavLink> */}
                {/* </li> */}
                <li className='ele'>
                <NavLink className="navL" to={{
                    pathname:"/hof",
                    state:{
                        from:"root"
                    }
                }
                }> ALL-STARS</NavLink>
                   
                </li>
                
            </div>
        </nav>
        </div>
    </div>
  )
}

export default Players