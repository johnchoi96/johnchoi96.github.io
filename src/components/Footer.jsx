import React from 'react'

export default function Footer() {
    return (
        <footer className='container-fullwidth'>
            <nav className="navbar fixed-bottom navbar-expand-md navbar-dark bg-dark justify-content-center">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                        <span className='nav-link justify-content-center'>John Choi</span>
                    </li>
                    <li className='nav-item'>
                        <span className='nav-link justify-content-center'>|</span>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link justify-content-center' href='mailto:choi.1655@osu.edu'>contact me</a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
