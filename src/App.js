import React, { useState, createContext, useMemo, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import HomePage from './pages/homepage/HomePage'
import AboutPage from './pages/aboutpage/AboutPage'
import MyWorkspacePage from './pages/myworkspacepage/MyWorkspacePage'
import CertificatePage from './pages/certificatepage/CertificatePage'
import MusicWorksPage from './pages/myworkspacepage/music/MusicworksPage'
import SoftwareWorksPage from './pages/myworkspacepage/software/SoftwareWorksPage'
import DiplomaPage from './pages/diplomapage/DiplomaPage'
import Error404 from './pages/error/Error404'
import Header from './components/navbars/header/Header'
import Footer from './components/navbars/footer/Footer'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { BrowserView } from 'react-device-detect'
import ReactGA from 'react-ga4'
import ContactMeResultToast from './components/toast/ContactMeResultToast'
import { sendPageview } from './analytics/useAnalyticsEventTracker'
import HaveWeMetOnVal from './pages/gamepage/valorant/HaveWeMetOnVal'

// create context for app-wide theme for dark/light mode
export const ThemeContext = createContext('')

// set up Google Analytics
const MEASUREMENT_ID = 'G-HHXGCPB88V'
ReactGA.initialize(MEASUREMENT_ID, {
    testMode: process.env.NODE_ENV === 'test'
})

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

    useEffect(() => {
        sendPageview('/', 'Landing Page')
    }, [])

    /**
     * Enable dark mode based on the system setting
     */
    useEffect(() => {
        const mq = window.matchMedia(
          "(prefers-color-scheme: dark)"
        )

        if (mq.matches) {
            setIsDarkMode(true)
        }

        // This callback will fire if the perferred color scheme changes without a reload
        mq.addEventListener("change", (evt) => setIsDarkMode(evt.matches))
    }, [])

    // post request result toast state
    const [toastState, setToastState] = useState({
        isOpen: false,
        didSucceed: false
    })

    return (
        <div className='App'>
            <ThemeContext.Provider value={value}>
                <Router>
                    <Header setToastState={setToastState} />
                    <Routes>
                        <Route exact path='/' element={<HomePage />} />
                        <Route exact path='/about' element={<AboutPage />} />
                        <Route
                            path='/myworkspace'
                            element={<MyWorkspacePage />}
                        />
                        <Route
                            exact
                            path='/myworkspace/music'
                            element={<MusicWorksPage />}
                        />
                        <Route
                            exact
                            path='/myworkspace/software'
                            element={<SoftwareWorksPage />}
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
                            exact
                            path='/games/valorant/have-we-met-on-val'
                            element={<HaveWeMetOnVal />}
                        />
                        <Route path='*' element={<Error404 />} />
                    </Routes>
                    <BrowserView>
                        <Footer setToastState={setToastState} />
                    </BrowserView>
                    <ContactMeResultToast
                        state={toastState}
                        setState={setToastState}
                    />
                </Router>
            </ThemeContext.Provider>
        </div>
    )
}
