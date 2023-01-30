import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import {companies} from '../../pages/aboutpage/aboutCareerData'
import { fontColorForBackground } from '../../pages/Utils/colorUtils';

export default function ExperienceTimeline() {
    const imagePath = '/assets/images/logo/'

    return (
        <VerticalTimeline>
            {
                companies.map((company, i) => {
                    return (
                        <VerticalTimelineElement
                            key={i}
                            className='vertical-timeline-element--work'
                            contentStyle={{ background: `${company.color}`, color: `${fontColorForBackground(company.color)}` }}
                            contentArrowStyle={{ borderRight: `7px solid  ${company.color}` }}
                            date={`${company.start} - ${company.end}`}
                            iconStyle={{ background: `${company.color}`, color: `${fontColorForBackground(company.color)}` }}
                            icon={<img style={{
                                width: '50%',
                                marginTop: '0.5rem'
                            }} src={imagePath + company.image} alt='company logo' />}
                        >
                            <h3 className="vertical-timeline-element-title">{company.position}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{company.location}</h4>
                            {
                                company.descriptions.map((desc, i) => {
                                    return (
                                        <p key={i}>
                                            {desc}
                                        </p>
                                    )
                                })
                            }
                        </VerticalTimelineElement>
                    )
                })
            }
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            />
        </VerticalTimeline>
    )
}