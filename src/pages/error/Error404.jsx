import React, { useEffect } from 'react'
import errorImage from '../../assets/images/error404_meme.jpg'

export default function Error404({ canScroll }) {

    useEffect(() => {
        if (canScroll !== undefined && !canScroll) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    }, [canScroll])

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
