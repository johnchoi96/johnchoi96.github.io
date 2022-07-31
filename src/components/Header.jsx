import React from 'react'
import {
    NavLink
} from 'react-router-dom'

const Header = () => {
    return (
        <div className='container-fullwidth'>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <ul className='navbar-nav text-start px-2'>
                    <li className='nav-item'>
                        <NavLink className='navbar-brand ' to='/'>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/myworkspace'>My Workspace</NavLink>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='https://www.github.com/johnchoi96'>GitHub</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='https://www.linkedin.com/in/johnchoi96'>LinkedIn</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='https://orcid.org/0000-0003-4898-323X'>ORCID</a>
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