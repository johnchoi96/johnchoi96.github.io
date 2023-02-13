import React from 'react'
import errorImage from '../../assets/images/error404_meme.jpg'

export default function Error404() {
    return (
        <div>
            <h1>This page does not exist!</h1>
            <img src={errorImage} alt='404 meme' />
        </div>
    )
}
