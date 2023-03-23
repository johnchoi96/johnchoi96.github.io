import React, { useEffect, useContext } from 'react'
import './AboutPage.styles.css'
import TechnologyBubbleUI from '../../components/aboutpage/TechnologiesBubbleUI'
import MyInfoBanner from '../../components/aboutpage/MyInfoBanner'
import ExperienceTimeline from '../../components/aboutpage/ExperienceTimeline'
import EducationTimeline from '../../components/aboutpage/EducationTimeline'
import { ThemeContext } from '../../App'
import { getBackgroundColor } from '../../Utils/colorUtils'

export default function About({ canScroll }) {
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

        if (canScroll !== undefined && !canScroll) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    }, [canScroll])

    return (
        <div
            style={{
                backgroundColor: getBackgroundColor(),
            }}
        >
            <MyInfoBanner />
            <h1 className={fontClass}>Experiences</h1>
            <ExperienceTimeline />
            <h1 className={fontClass}>Education</h1>
            <EducationTimeline />
            <h1 className={fontClass}>Technologies I've used...</h1>
            <TechnologyBubbleUI />
        </div>
    )
}
