/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ThemeContext } from '../../../App'

import ContactMeModal from '../../modals/ContactMeModal'

import { sendPageview } from '../../../analytics/useAnalyticsEventTracker'

import './Header.styles.scss'
import { isMobile } from 'react-device-detect'
import { getRequestForPing } from '../../../Utils/httpRequests'
import WebServiceStatusDetailModal from '../../modals/WebServiceStatusDetailModal'

export default function Header({ setToastState }) {
    const [modalOpen, setModalOpen] = useState(false)
    const [statusModalOpen, setStatusModalOpen] = useState(false)
    const [serviceStatus, setServiceStatus] = useState('❌')

    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)

    useEffect(() => {
        getRequestForPing().then((response) =>
            response.ok ? setServiceStatus('✅') : setServiceStatus('❌')
        )
    }, [])

    return (
        <div>
            {modalOpen ? (
                <ContactMeModal
                    setModalOpen={setModalOpen}
                    setToastState={setToastState}
                />
            ) : (
                <></>
            )}
            {statusModalOpen ? (
                <WebServiceStatusDetailModal
                    serviceStatus={serviceStatus}
                    setModalOpen={setStatusModalOpen}
                />
            ) : (
                <></>
            )}
            <nav
                className={`navbar fixed-top navbar-expand-lg bg-${
                    isDarkMode ? 'dark navbar-dark ' : 'light'
                }`}
            >
                <div className='navbar-height container-fluid'>
                    <NavLink className='navbar-brand nav-link fw-bold' to='/'>
                        Home
                    </NavLink>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarSupportedContent'
                    >
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link
                                    className='nav-link'
                                    to='/about'
                                    onClick={() =>
                                        sendPageview('/about', 'About')
                                    }
                                >
                                    About
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    className='nav-link'
                                    to='/myworkspace'
                                    onClick={() =>
                                        sendPageview(
                                            '/myworkspace',
                                            'MyWorkspace'
                                        )
                                    }
                                >
                                    My Workspace
                                </Link>
                            </li>
                            <li className='nav-item dropdown'>
                                <a
                                    className='nav-link dropdown-toggle'
                                    href='#'
                                    id='navbarDropdown'
                                    role='button'
                                    data-bs-toggle='dropdown'
                                    aria-expanded='false'
                                >
                                    GitHub
                                </a>
                                <ul
                                    className={`dropdown-menu dropdown-menu${
                                        isDarkMode ? '-dark' : ''
                                    }`}
                                    aria-labelledby='navbarDropdown'
                                >
                                    <li>
                                        <a
                                            className='dropdown-item'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            href='https://www.github.com/johnchoi96'
                                        >
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className='dropdown-item'
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            href='https://github.com/johnchoi96/johnchoi96.github.io'
                                        >
                                            Source
                                        </a>
                                    </li>
                                    {/* <li><hr className='dropdown-divider' /></li> */}
                                </ul>
                            </li>
                            {/* <li className='nav-item'>
                            <a className='nav-link disabled' href='#' tabindex='-1' aria-disabled='true'>Disabled</a>
                        </li> */}
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://www.linkedin.com/in/johnchoi96'
                                    onClick={() =>
                                        sendPageview('/linkedin', 'LinkedIn')
                                    }
                                >
                                    LinkedIn
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    href='https://orcid.org/0000-0003-4898-323X'
                                    onClick={() =>
                                        sendPageview('/ORCID', 'ORCID')
                                    }
                                >
                                    ORCID
                                </a>
                            </li>
                            <li className='nav-item'>
                                <a
                                    className='nav-link'
                                    href={
                                        process.env.PUBLIC_URL +
                                        '/assets/files/Resume.pdf'
                                    }
                                    onClick={() =>
                                        sendPageview(
                                            '/resume',
                                            'Resume',
                                            'file_download'
                                        )
                                    }
                                >
                                    Resume
                                </a>
                            </li>
                            {isMobile ? (
                                <li className='nav-item'>
                                    <span
                                        className='nav-link justify-content-center'
                                        onClick={() => setModalOpen(true)}
                                    >
                                        Contact Me
                                    </span>
                                </li>
                            ) : (
                                <></>
                            )}
                        </ul>
                        {/* <form className='d-flex'>
                        <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                        <button className='btn btn-outline-success' type='submit'>Search</button>
                    </form> */}

                        <li className='nav-item dropdown'>
                            <a
                                className={`nav-link ms-2 dropdown-toggle text-${
                                    isDarkMode ? 'light' : 'dark'
                                }`}
                                href='#'
                                id='navbarDropdown'
                                role='button'
                                data-bs-toggle='dropdown'
                                aria-expanded='false'
                            >
                                Service Status
                            </a>
                            <ul
                                className={`dropdown-menu dropdown-menu-${
                                    isDarkMode ? 'dark' : ''
                                }`}
                                aria-labelledby='navbarDropdown'
                            >
                                <li>
                                    <span className='dropdown-item'>
                                        Status: {serviceStatus}
                                    </span>
                                    {/* TODO: implement */}
                                </li>

                                <li>
                                    <hr className='dropdown-divider' />
                                </li>
                                <li>
                                    <button
                                        className='dropdown-item'
                                        type='button'
                                        onClick={() => setStatusModalOpen(true)}
                                    >
                                        Status Details
                                    </button>
                                </li>
                            </ul>
                        </li>
                        {/* Light/Dark mode switch */}
                        <div className='form-check ms-2 form-switch d-flex'>
                            <input
                                className='form-check-input'
                                type='checkbox'
                                role='switch'
                                id='flexSwitchCheckDefault'
                                checked={isDarkMode}
                                onChange={() => {
                                    setIsDarkMode(!isDarkMode)
                                    localStorage.setItem(
                                        'local-theme',
                                        JSON.stringify(isDarkMode)
                                    )
                                }}
                                style={{
                                    marginRight: '0.5rem'
                                }}
                            />
                            <label
                                className={`form-check-label ${
                                    isDarkMode ? 'text-white' : 'text-dark'
                                }`}
                                htmlFor='flexSwitchCheckDefault'
                            >
                                {isDarkMode ? (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='25'
                                        height='25'
                                        fill='currentColor'
                                        className='bi bi-moon'
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z' />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='25'
                                        height='25'
                                        fill='currentColor'
                                        className='bi bi-sun'
                                        viewBox='0 0 16 16'
                                    >
                                        <path d='M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z' />
                                    </svg>
                                )}
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
