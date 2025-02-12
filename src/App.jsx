import React, { useState, createContext, useMemo, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/navbars/header/Header'
import Footer from './components/navbars/footer/Footer'

import { BrowserRouter as Router, Routes } from 'react-router-dom'
import { BrowserView } from 'react-device-detect'
import ReactGA from 'react-ga4'
import ContactMeResultToast from './components/toast/ContactMeResultToast'
import { sendPageview } from './analytics/useAnalyticsEventTracker'
import routes from './routers'

// create context for app-wide theme for dark/light mode
export const ThemeContext = createContext('')

// set up Google Analytics
const MEASUREMENT_ID = 'G-HHXGCPB88V'
ReactGA.initialize(MEASUREMENT_ID, {
    testMode: process.env.NODE_ENV === 'test'
})

export default function App() {

    const [isDarkMode, setIsDarkMode] = useState(false)

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
                        {routes()}
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
