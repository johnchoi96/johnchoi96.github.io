import React, { useContext } from 'react'

import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { ThemeContext } from '../../App'

import { fontColorForBackground } from '../../pages/Utils/colorUtils'

export default function EducationTimeline() {
    const { isDarkMode } = useContext(ThemeContext)

    const osuColor = '#ba0c2f'

    const osuEngineering = '/assets/images/logo/ohio-state-coe.svg'

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className='vertical-timeline-element--education'
                contentStyle={{
                    background: osuColor,
                    color: `${fontColorForBackground(osuColor)}`
                }}
                contentArrowStyle={{ borderRight: `7px solid ${osuColor}` }}
                date='May 2022'
                dateClassName={`${isDarkMode ? '' : 'text-dark'}`}
                iconStyle={{
                    background: osuColor,
                    color: `${fontColorForBackground(osuColor)}`
                }}
                icon={
                    <img
                        style={{
                            width: '50%',
                            marginTop: '0.5rem'
                        }}
                        src={osuEngineering}
                        alt='OSU logo'
                    />
                }
                position='right'
            >
                <h3 className='vertical-timeline-element-title fw-bold'>
                    The Ohio State University
                </h3>
                <h5 className='vertical-timeline-element-subtitle'>
                    College of Engineering
                </h5>
                <h6 className='vertical-timeline-element-subtitle'>
                    Columbus, OH
                </h6>
                <p>
                    BS Computer Science and Engineering
                    <br />
                    Software Engineering Specialization
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}
