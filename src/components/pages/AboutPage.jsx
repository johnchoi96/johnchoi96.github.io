import React, {useEffect} from 'react'
import './AboutPage.styles.css'
import CompanyBubbleUI from './CompanyBubbleUI'
import TechnologyBubbleUI from './TechnologiesBubbleUI'

const About = () => {

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
                if(!isDown) return
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

    return (
        <div>
            <h1>Places I've been to...</h1>
            <CompanyBubbleUI />
            <h1>Technologies I've used...</h1>
            <TechnologyBubbleUI />
        </div>
    )
}

export default About