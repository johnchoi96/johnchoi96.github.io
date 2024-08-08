import React, { useContext } from 'react'

import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { ThemeContext } from '../../App'

import { fontColorForBackground } from '../../Utils/colorUtils'
import { Tooltip } from '@mui/material'
import { gatechDescription, osuDescription } from './education_description'

function GeorgiaTech({ isDarkMode }) {
    const techGold = '#b3a369'

    const techIcon = '/assets/images/logo/GTVertical_RGB.png'

    return (
        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            contentStyle={{
                background: techGold,
                color: `${fontColorForBackground(techGold)}`
            }}
            contentArrowStyle={{ borderRight: `7px solid ${techGold}` }}
            date='Aug 2024 - Present'
            dateClassName={`${isDarkMode ? 'text-light' : 'text-dark'}`}
            iconStyle={{
                background: techGold,
                color: `${fontColorForBackground(techGold)}`
            }}
            icon={
                <img
                    style={{
                        width: '80%',
                        marginTop: '0.5rem'
                    }}
                    src={techIcon}
                    alt='GaTech logo'
                />
            }
            position='right'
        >
            <Tooltip title={gatechDescription}>
                <div>
                    <h3 className='vertical-timeline-element-title fw-bold'>
                        Georgia Institute of Technology
                    </h3>
                    <h5 className='vertical-timeline-element-subtitle'>
                        College of Computing
                    </h5>
                    <h6 className='vertical-timeline-element-subtitle'>Atlanta, GA</h6>
                    <p>Master of Science - MS, Computer Science</p>
                </div>
            </Tooltip>

        </VerticalTimelineElement>
    )
}

function TheOhioStateUniversity({ isDarkMode }) {
    const osuColor = '#ba0c2f'

    const osuEngineering = '/assets/images/logo/ohio-state-coe.svg'

    return (
        <VerticalTimelineElement
            className='vertical-timeline-element--education'
            contentStyle={{
                background: osuColor,
                color: `${fontColorForBackground(osuColor)}`
            }}
            contentArrowStyle={{ borderRight: `7px solid ${osuColor}` }}
            date='May 2022'
            dateClassName={`${isDarkMode ? 'text-light' : 'text-dark'}`}
            iconStyle={{
                background: osuColor,
                color: `${fontColorForBackground(osuColor)}`
            }}
            icon={
                <img
                    style={{
                        width: '80%',
                        marginTop: '0.5rem'
                    }}
                    src={osuEngineering}
                    alt='OSU logo'
                />
            }
            position='right'
        >
            <Tooltip title={osuDescription}>
                <div>
                    <h3 className='vertical-timeline-element-title fw-bold'>
                        The Ohio State University
                    </h3>
                    <h5 className='vertical-timeline-element-subtitle'>
                        College of Engineering
                    </h5>
                    <h6 className='vertical-timeline-element-subtitle'>Columbus, OH</h6>
                    <p>
                        Bachelor of Science - BS, Computer Science and Engineering
                        <br />
                        Software Engineering Specialization
                    </p>
                </div>
            </Tooltip>
        </VerticalTimelineElement>
    )
}

export default function EducationTimeline() {
    const { isDarkMode } = useContext(ThemeContext)

    return (
        <VerticalTimeline>
            <GeorgiaTech isDarkMode={isDarkMode} />
            <TheOhioStateUniversity isDarkMode={isDarkMode} />
        </VerticalTimeline>
    )
}
