import React from 'react'
import {
    NavLink
} from 'react-router-dom'
import {BrowserView, MobileView} from 'react-device-detect'

import './Header.styles.scss'

const Header = () => {
    return (
        <div>
            <BrowserView>
                <header className='container-fullwidth'>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <ul className='navbar-nav text-start px-2'>
                            <li className='nav-item'>
                                <NavLink className='nav-link fw-bold' to='/'>Home</NavLink>
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
                </header>
            </BrowserView>
            <MobileView>
                <header className="mobile-header collapse align-items-start justify-content-start" id="navbarToggle">
                    <div className="bg-dark p-4">
                        <span className='nav-link fw-bold text-white'>
                            <a className='nav-link' href='/'>
                                <h4>Home</h4>
                            </a>
                        </span>
                        <span className='nav-link text-white-50'>
                            <a className='nav-link' href='/myworkspace'>
                                <h6>My Workspace</h6>
                            </a>
                        </span>
                        <span className='nav-link text-white-50'>
                            <a className='nav-link' href='https://www.linkedin.com/in/johnchoi96'>
                                <h6>LinkedIn</h6>
                            </a>
                        </span>
                        <span className='nav-link text-white-50'>
                            <a className='nav-link' href='https://orcid.org/0000-0003-4898-323X'>
                                <h6>ORCID</h6>
                            </a>
                        </span>
                        <span className='nav-link text-white-50'>
                            <a className='nav-link' href={process.env.PUBLIC_URL + '/assets/files/Resume.pdf'}>
                                <h6>Resume</h6>
                            </a>
                        </span>
                        <div className="nav-link d-flex justify-content-center align-items-center">
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="navbarScrollingDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    GitHub
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><a className="dropdown-item" href='https://www.github.com/johnchoi96'>GitHub</a></li>
                                    <li><a className="dropdown-item" href='https://github.com/johnchoi96/johnchoi96.github.io'>Source</a></li>
                                </ul>
                            </li>
                        </div>
                    </div>
                </header>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </MobileView>
        </div>

    )
}

export default Header