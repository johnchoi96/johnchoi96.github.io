import React, { useContext } from 'react'
import photo_of_me from '../../assets/images/photo_of_me.png'
import Emoji from '../Utils/Emoji'
import { ThemeContext } from '../../App'
import { HashLink } from 'react-router-hash-link'
import { getFontColorText } from '../../Utils/colorUtils'
import { Tooltip } from '@mui/material'
import { gatechDescription } from './education_description'
import SkillPills from './SkillPills'
import './MyInfoBanner.styles.css'

export default function MyInfoBanner() {
    const { isDarkMode } = useContext(ThemeContext)
    const introFontSize = Math.max(window.innerWidth, window.innerHeight) * 0.02 // font is 2 percent of the longest side of screen

    return (
        <div className='my-info-banner'>
            <div className='row'>
                <div className='col-lg-4 mb-2'>
                    <img
                        className='my-info-banner-img rounded-circle'
                        src={photo_of_me}
                        alt='John Choi Pic'
                    />
                </div>
                <div className='col-lg-8'>
                    <div
                        className={`col align-self-center text-${
                            isDarkMode ? 'white' : 'dark'
                        }`}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <span
                            style={{
                                fontSize: introFontSize
                            }}
                        >
                            Hi <Emoji symbol='👋' />, I'm John Choi,
                            <br />
                            <HashLink
                                style={{
                                    textDecoration: 'none',
                                    color: getFontColorText()
                                }}
                                smooth
                                to='#experiences'
                            >
                                Full Stack Software Engineer at JPMorganChase
                            </HashLink>
                            <br />
                            <Tooltip title={gatechDescription}>
                                <div>
                                    <HashLink
                                        style={{
                                            textDecoration: 'none',
                                            color: getFontColorText()
                                        }}
                                        smooth
                                        to='#education'
                                    >
                                        MS Computer Science student at Georgia
                                        Tech
                                    </HashLink>
                                </div>
                            </Tooltip>
                        </span>
                        <SkillPills />
                    </div>
                </div>
            </div>
        </div>
    )
}