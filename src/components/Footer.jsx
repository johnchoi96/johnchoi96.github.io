import React, { useContext } from 'react'
import { ThemeContext } from '../App'

export default function Footer() {
    const { isDarkMode } = useContext(ThemeContext)

    return (
        <footer className='container-fullwidth'>
            <nav
                className={`navbar fixed-bottom navbar-expand-md bg-${
                    isDarkMode ? 'dark navbar-dark' : 'light'
                } justify-content-center`}
            >
                <ul className='navbar-nav align-items-center'>
                    <li className='nav-item'>
                        <span className='nav-link justify-content-center'>
                            John Choi
                        </span>
                    </li>
                    <li className='nav-item'>
                        <span className='nav-link justify-content-center'>
                            |
                        </span>
                    </li>
                    <li className='nav-item'>
                        <a
                            className='nav-link justify-content-center'
                            href='mailto:choi.1655@osu.edu'
                        >
                            contact me
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
