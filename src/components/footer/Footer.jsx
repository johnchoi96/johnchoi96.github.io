import React, { useState, useContext } from 'react'
import { ThemeContext } from '../../App'
import ContactMeModal from './ContactMeModal'

export default function Footer() {
    const { isDarkMode } = useContext(ThemeContext)
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div>
            {
                modalOpen ? <ContactMeModal setModalOpen={setModalOpen} /> : <></>
            }
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
                            <span
                                className='nav-link justify-content-center'
                                onClick={e => setModalOpen(true)}
                            >
                                contact me
                            </span>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}
