import React from 'react'
import photo_of_me from '../../assets/images/photo_of_me.png'

import Emoji from '../Utils/Emoji'

import { isMobile } from 'react-device-detect'

export default function MyInfoBanner() {

    const containerHeight = isMobile ? '60vh' : '30vh'
    const introFontSize = Math.max(window.innerWidth, window.innerHeight) * 0.02 // font is 2 percent of the longest side of screen

    return (
        <div className='container' style={{
            height: containerHeight,
            width: 'auto',
            marginTop: '1rem'
        }}>
            <div className='row'>
                <div className='col-lg-3 mb-5' style={{
                    maxHeight: '35vh'
                }}>
                    <img className='rounded-circle' src={photo_of_me} alt='John Choi Pic' height='100%' />
                </div>
                <div className='col-lg-9'>
                    <div className='col align-self-center text-white' style={{
                        position: 'relative',
                        left: '50%',
                        top: '40%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <span style={{
                            fontSize: introFontSize
                        }}>
                            Hi <Emoji symbol='👋' />, I'm John Choi,
                            <br />
                            Full Stack Software Engineer at JPMorgan Chase & Co.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}