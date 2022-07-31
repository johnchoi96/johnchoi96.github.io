import React from 'react'
import errorImage from '../../assets/images/error404_meme.jpg'

const Error404 = () => {
    return (
        <div>
            <h1>Wrong page!</h1>
            <p>This page does not exist!</p>
            <img src={errorImage} alt='404 meme' />
        </div>
    )
}

export default Error404