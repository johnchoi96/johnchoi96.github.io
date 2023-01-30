import React from 'react'
import photo_of_me from '../../assets/images/photo_of_me.png'

import Emoji from '../Utils/Emoji'

import { isMobile, BrowserView } from 'react-device-detect'

export default function MyInfoBanner() {

    const containerHeight = isMobile ? '60vh' : '30vh'

    return (
        <div className='container' style={{
            height: containerHeight,
            width: 'auto',
            marginTop: '1rem'
        }}>
            <div className='row'>
                <div className='col-sm-3 mb-5' style={{
                    maxHeight: '30vh'
                }}>
                    <img className='rounded-circle' src={photo_of_me} alt='John Choi Pic' height='100%' />
                </div>
                <div className='col-sm-9'>
                    <BrowserView>
                        <div className='col align-self-center text-white' style={{
                            fontSize: '2rem',
                            marginTop: '1rem'
                        }}>
                            Hi <Emoji symbol='👋' />, I'm John Choi,
                            <br />
                            Full Stack Software Engineer at JPMorgan Chase & Co.
                        </div>
                    </BrowserView>

                </div>
            </div>
        </div>
    )
}