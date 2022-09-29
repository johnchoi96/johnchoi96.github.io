import React from 'react'
import {Link} from 'react-router-dom'
import {isMobile} from 'react-device-detect'
import osu_engineering_img from '../../assets/images/OSU-Engineering.png'
import './HomePage.styles.css'

const AboutPage = () => {
    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-sm-7'>
                    <h4 className='text-start'>John Choi</h4>
                    <h6 className='text-start'>The Ohio State University, Columbus, OH</h6>
                    <br />
                    <p className='text-start'>College of Engineering</p>
                    <p className='text-start'>BS Computer Science and Engineering '22</p>
                    <p className='text-start'>Software Engineering Track</p>
                </div>
                <div className='col-sm-5'>
                    <a href="https://www.cse.osu.edu/">
                        <img className='osu-engineering pt-2' src={osu_engineering_img} alt='osu-engineering' />
                    </a>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div className='row'>
                <div className='col'>
                    <h4 className={isMobile ? 'text-center' : 'text-start'}>Info</h4>
                    <p className={isMobile ? 'text-center' : 'text-start'}>Email: <a href='mailto:choi.1655@osu.edu'>choi.1655@osu.edu</a></p>
                    <p className={isMobile ? 'text-center' : 'text-start'}>Website: <Link to='/'>johnchoi96.github.io</Link></p>
                    <p className={isMobile ? 'text-center' : 'text-start'}>Address: Columbus, OH</p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage