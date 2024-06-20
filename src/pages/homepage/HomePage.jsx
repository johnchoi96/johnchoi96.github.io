import React, { useEffect, useContext } from 'react'
import { ThemeContext } from '../../App'
import './HomePage.styles.css'
import '../../App.css'

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

export default function HomePage() {
    const { isDarkMode } = useContext(ThemeContext)

    const fontSize = Math.max(window.innerHeight, window.innerWidth) * 0.06 // 6% of the longest side of screen

    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [isDarkMode])

    return (
        <div
            className={
                isDarkMode
                    ? 'backgroundGif-dark text-white'
                    : 'backgroundGif-light text-dark'
            }
        >
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
                    <SplitText text='Software Engineer at JPMorganChase' />
                </h6>
            </div>
        </div>
    )
}
