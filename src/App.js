import React, { useState, createContext, useMemo } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './pages/homepage/HomePage'
import AboutPage from './pages/aboutpage/AboutPage'
import MyWorkspacePage from './pages/myworkspacepage/MyWorkspacePage'
import CertificatePage from './pages/certificatepage/CertificatePage'
import DiplomaPage from './pages/diplomapage/DiplomaPage'
import Error404 from './pages/error/Error404'
import Header from './components/Header'
import Footer from './components/Footer'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { BrowserView } from 'react-device-detect'

export const ThemeContext = createContext('')

export default function App() {
    // getter for local saved theme
    var localStorageTheme = JSON.parse(localStorage.getItem('local-theme'))
    if (localStorageTheme === null) {
        localStorageTheme = false
    }

    const [isDarkMode, setIsDarkMode] = useState(!localStorageTheme)

    const value = useMemo(() => {
        return {
            isDarkMode,
            setIsDarkMode
        }
    }, [isDarkMode])

    return (
        <div className='App'>
            <ThemeContext.Provider value={value}>
                <Router>
                    <Header />
                    <Routes>
                        <Route
                            exact
                            path='/'
                            element={<HomePage canScroll={false} />}
                        />
                        <Route exact path='/about' element={<AboutPage />} />
                        <Route
                            exact
                            path='/myworkspace'
                            element={<MyWorkspacePage />}
                        />
                        <Route
                            exact
                            path='/certificates'
                            element={<CertificatePage />}
                        />
                        <Route
                            exact
                            path='/diplomas'
                            element={<DiplomaPage />}
                        />
                        <Route
                            path='*'
                            element={<Error404 canScroll={false} />}
                        />
                    </Routes>
                    <BrowserView>
                        <Footer />
                    </BrowserView>
                </Router>
            </ThemeContext.Provider>
        </div>
    )
}
