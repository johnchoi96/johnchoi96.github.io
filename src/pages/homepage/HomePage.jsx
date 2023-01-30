import React from 'react'
import './HomePage.styles.css'

const SplitText = ({text}) => {
    return (
        <span aria-label={text}>
            {
                text.split('').map(function(char, index) {
                    const style = {'animation-delay': (0.5 + index / 10) + 's'}
                    return (
                        <span
                            aria-hidden='true'
                            key={index}
                            style={style}
                        >
                            {char}
                        </span>
                    )
                })
            }
        </span>
    )
}

export default function AboutPage() {
    return (
        <div className='backgroundGif'>
            <div className='text-white'>
                <h1 style={{
                    fontSize: '900%'
                }}>
                    <SplitText text='John Choi' />
                </h1>
                <h6>
                    <SplitText text='Software Engineer at JPMorgan Chase & Co.' />
                </h6>
            </div>

        </div>
    )
}
