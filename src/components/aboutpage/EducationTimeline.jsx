import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { fontColorForBackground } from '../../pages/Utils/colorUtils';

import OSUEngineering from '../../assets/images/OSU-Engineering.png'

export default function EducationTimeline() {
    const osuColor = '#ba0c2f'

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className='vertical-timeline-element--education'
                contentStyle={{ background: osuColor, color: `${fontColorForBackground(osuColor)}` }}
                contentArrowStyle={{ borderRight: `7px solid  ${osuColor}` }}
                date='May 2022'
                iconStyle={{ background: osuColor, color: `${fontColorForBackground(osuColor)}` }}
                icon={<img style={{
                    width: '50%',
                    marginTop: '0.5rem'
                }} src={OSUEngineering} alt='OSU logo' />}
                position='right'
            >
                <h4 className="vertical-timeline-element-title">The Ohio State University, Columbus, OH</h4>
                <h4 className='vertical-timeline-element-subtitle'>College of Engineering</h4>
                <p>BS Computer Science and Engineering</p>
                <p>Software Engineering Specialization</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}