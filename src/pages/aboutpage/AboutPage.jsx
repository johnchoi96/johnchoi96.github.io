import React, { useEffect, useContext } from 'react'
import './AboutPage.styles.css'
import TechnologyBubbleUI from '../../components/aboutpage/TechnologiesBubbleUI'
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
        const bubbles = document.querySelectorAll('._2MD0k')
        for (let i = 0; i < bubbles.length; i++) {
            const bubble = bubbles[i]
            const dragspeed = 2
            let isDown = false
            let startX
            let startY
            let scrollLeft
            let scrollTop

            bubble.addEventListener('mousedown', (e) => {
                isDown = true
                bubble.classList.add('active')
                startX = e.pageX - bubble.offsetLeft
                startY = e.pageY - bubble.offsetTop
                scrollLeft = bubble.scrollLeft
                scrollTop = bubble.scrollTop
            })

            bubble.addEventListener('mouseleave', () => {
                isDown = false
                bubble.classList.remove('active')
            })

            bubble.addEventListener('mouseup', () => {
                isDown = false
                bubble.classList.remove('active')
            })

            bubble.addEventListener('mousemove', (e) => {
                if (!isDown) return
                e.preventDefault()
                const x = e.pageX - bubble.offsetLeft
                const y = e.pageY - bubble.offsetTop
                const walk = (x - startX) * dragspeed
                const topwalk = (y - startY) * dragspeed
                bubble.scrollLeft = scrollLeft - walk
                bubble.scrollTop = scrollTop - topwalk
            })
        }
    }, [])

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

            <h1 className={fontClass}>Technologies I've used...</h1>
            <TechnologyBubbleUI />
        </div>
    )
}
