import React, { useEffect } from 'react'
import errorImage from '../../assets/images/backgrounds/error404_meme.jpg'

export default function Error404() {

    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])

    return (
        <div style={{
            paddingTop: '44px',
            minHeight: (window.innerHeight)
        }}>
            <h1>This page does not exist!</h1>
            <img src={errorImage} alt='404 meme' />
        </div>
    )
}
