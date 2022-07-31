import React from 'react'
import {
    NavLink
} from 'react-router-dom'

const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className='navbar-brand' to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='nav-link' to='/myworkspace'>My Workspace</NavLink>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href={process.env.PUBLIC_URL + '/assets/files/Resume.pdf'}>Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header