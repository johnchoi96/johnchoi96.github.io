import React, { useEffect, useContext } from 'react'
import './AboutPage.styles.css'
import MyInfoBanner from '../../components/aboutpage/MyInfoBanner'
import ExperienceTimeline from '../../components/aboutpage/ExperienceTimeline'
import EducationTimeline from '../../components/aboutpage/EducationTimeline'
import { ThemeContext } from '../../App'
import { getBackgroundColor } from '../../Utils/colorUtils'
import { sendPageview } from '../../analytics/useAnalyticsEventTracker'

export default function About() {
    const { isDarkMode } = useContext(ThemeContext)
    const fontClass = isDarkMode ? 'light-font' : 'dark-font'

    useEffect(() => {
        // enable scroll
        document.body.style.overflow = 'scroll'
    }, [])

    useEffect(() => {
        sendPageview('/about', 'About')
    }, [])

    return (
        <div
            style={{
                backgroundColor: getBackgroundColor()
            }}
        >
            <MyInfoBanner />
            <section id='experiences'>
                <h1 className={fontClass}>Experiences</h1>
                <ExperienceTimeline />
            </section>
            <section id='education'>
                <h1 className={fontClass}>Education</h1>
                <EducationTimeline />
            </section>
        </div>
    )
}
