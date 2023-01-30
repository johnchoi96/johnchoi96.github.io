import React from 'react'
import photo_of_me from '../../assets/images/photo_of_me.png'

import Emoji from '../Utils/Emoji'

export default function MyInfoBanner() {
    return (
        <div className='container' style={{
            // backgroundColor: 'green',
            height: '30vh',
            width: 'auto',
            marginTop: '1rem'
        }}>
            <div className='row'>
                <div className='col-3' style={{
                    maxHeight: '30vh'
                }}>
                    <img className='rounded-circle' src={photo_of_me} alt='John Choi Pic' height='100%' />
                </div>
                <div className='col'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col align-self-center text-white' style={{
                                fontSize: '2rem',
                                marginTop: '1rem'
                            }}>
                                Hi <Emoji symbol='👋' />, I'm John Choi,
                                <br />
                                Full Stack Software Engineer at JPMorgan Chase & Co.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}