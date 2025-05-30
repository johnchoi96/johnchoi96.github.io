import React, { useEffect, useContext } from 'react'
import { ThemeContext } from '../../App'
import './HomePage.styles.css'
import Lottie from 'lottie-react'
import sun from '../../assets/lottie/sun.json'
import crescent from '../../assets/lottie/crescent.json'
import '../../App.css'
import Avatar from '@mui/material/Avatar'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const SplitText = ({ text }) => {
    return (
        <span className='disable-text-selection' aria-label={text}>
            {text.split('').map(function (char, index) {
                const style = { animationDelay: 0.5 + index / 10 + 's' }
                return (
                    <span aria-hidden='true' key={index} style={style}>
                        {char}
                    </span>
                )
            })}
        </span>
    )
}

const EnvAnimation = ({ isDarkMode }) => {

    const mobileTopPlacement = () => {
        if (window.innerWidth < 768) {
            return '20vh'
        }
        return '10vh'
    }

    return (
        <div
            style={{
                position: "absolute",
                top: mobileTopPlacement(),
                left: "70vw",
                transform: "translate(-50%, -50%)",
                width: "20%",   // Responsive width
                height: "20%",  // Keep it square; tweak as needed
                pointerEvents: "none",
            }}
        >
            <Lottie animationData={isDarkMode ? crescent : sun} loop autoplay />
        </div>
    )
}

export default function HomePage() {
    const { isDarkMode } = useContext(ThemeContext)

    const fontSize = Math.max(window.innerHeight, window.innerWidth) * 0.06 // 6% of the longest side of screen

    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [isDarkMode])

    function getPositionText() {
        const currentDate = new Date()
        const jpmcLastDay = new Date('2025-05-22')
        const appleStartDate = new Date('2025-06-16')

        if (currentDate < jpmcLastDay) {
            return 'Software Engineer II at JPMorganChase'
        }
        if (currentDate < appleStartDate) {
            return 'Incoming Software Engineer at Apple'
        }
        return 'Software Engineer at Apple'
    }

    return (
        <div
            className={
                isDarkMode
                    ? 'background-dark text-white'
                    : 'background-light text-dark'
            }
        >
            <EnvAnimation isDarkMode={isDarkMode} />
            <div className='centertext'>
                <h1
                    style={{
                        fontSize: fontSize,
                        color: isDarkMode ? 'white' : 'black'
                    }}
                >
                    <SplitText text='John Choi' />
                </h1>
                <h6>
                    <SplitText text={getPositionText()} />
                </h6>
                <div className='link-circles'>
                    <Avatar
                        alt="GitHub icon"
                        component="a"
                        href="https://github.com/johnchoi96"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ cursor: 'pointer', bgcolor: '#24292e' }}
                    >
                        <GitHubIcon />
                    </Avatar>

                    <Avatar
                        alt="LinkedIn icon"
                        component="a"
                        href="https://www.linkedin.com/in/johnchoi96/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ cursor: 'pointer', bgcolor: '#0072b1' }}
                    >
                        <LinkedInIcon />
                    </Avatar>
                </div>
            </div>
        </div>
    )
}
