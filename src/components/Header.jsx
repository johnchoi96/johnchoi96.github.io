/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
    NavLink,
    Link
} from 'react-router-dom'

import './Header.styles.scss'

export default function Header() {
    return (
        <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
            <div className='navbar-height container-fluid'>
                <NavLink className='navbar-brand nav-link fw-bold' to='/'>Home</NavLink>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <Link className='nav-link' to='/about'>About</Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link className='nav-link' to='myworkspace'>My Workspace</Link>
                        </li> */}
                        <li className='nav-item dropdown'>
                            <a className='nav-link dropdown-toggle' href='#' id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                GitHub
                            </a>
                            <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                <li><a className='dropdown-item' target='_blank' rel='noopener noreferrer' href='https://www.github.com/johnchoi96'>Profile</a></li>
                                <li><a className='dropdown-item' target='_blank' rel='noopener noreferrer' href='https://github.com/johnchoi96/johnchoi96.github.io'>Source</a></li>
                                {/* <li><hr className='dropdown-divider' /></li> */}
                            </ul>
                        </li>
                        {/* <li className='nav-item'>
                            <a className='nav-link disabled' href='#' tabindex='-1' aria-disabled='true'>Disabled</a>
                        </li> */}
                        <li className='nav-item'>
                            <a className='nav-link' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/johnchoi96'>LinkedIn</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' target='_blank' rel='noopener noreferrer' href='https://orcid.org/0000-0003-4898-323X'>ORCID</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href={process.env.PUBLIC_URL + '/assets/files/Resume.pdf'}>Resume</a>
                        </li>
                    </ul>
                    {/* <form className='d-flex'>
                        <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                        <button className='btn btn-outline-success' type='submit'>Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}
