import React, { useEffect } from 'react'
import errorImage from '../../assets/images/backgrounds/error404_meme.jpg'
import { sendPageview } from '../../analytics/useAnalyticsEventTracker'
import { getFontColorText } from '../../Utils/colorUtils'

export default function Error404() {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [])

    useEffect(() => {
        sendPageview('/error', 'Error Page')
    }, [])

    return (
        <div
            style={{
                paddingTop: '44px',
                minHeight: window.innerHeight
            }}
        >
            <h1 className={`text-${getFontColorText()}`}>
                This page does not exist!
            </h1>
            <img src={errorImage} alt='404 meme' width='90%' />
        </div>
    )
}
