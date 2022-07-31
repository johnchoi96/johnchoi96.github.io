import React from 'react'
import {
    NavLink
} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='container-fullwidth'>
            <nav className="navbar fixed-bottom navbar-expand-md navbar-dark bg-dark justify-content-center">
                <ul className="navbar-nav align-items-center">
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

export default Footer