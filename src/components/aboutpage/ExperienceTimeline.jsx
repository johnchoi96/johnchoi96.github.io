import React, { useEffect, useContext, useState } from 'react'

import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { ThemeContext } from '../../App'

import { companies } from '../../pages/aboutpage/aboutCareerData'
import { fontColorForBackground } from '../../Utils/colorUtils'

export default function ExperienceTimeline() {
    const { isDarkMode } = useContext(ThemeContext)

    const [lineColor, setLineColor] = useState(null)

    const imagePath = '/assets/images/logo/'

    useEffect(() => {
        isDarkMode ? setLineColor('white') : setLineColor('#000000')
    }, [isDarkMode])

    const getCompanies = () => {
        let companyList = [...companies]
        const currentDate = new Date()
        const jpmcLastDay = new Date('2025-05-22')
        if (currentDate < jpmcLastDay) {
            companyList.shift()
        }
        return companyList
    }

    return (
        <VerticalTimeline lineColor={lineColor}>
            {getCompanies().map((company, i) => {
                return (
                    <VerticalTimelineElement
                        key={i}
                        className='vertical-timeline-element--work'
                        contentStyle={{
                            background: `${company.color}`,
                            color: `${fontColorForBackground(company.color)}`
                        }}
                        contentArrowStyle={{
                            borderRight: `7px solid ${company.color}`
                        }}
                        date={`${company.start} - ${company.end}`}
                        dateClassName={`${isDarkMode ? '' : 'text-dark'}`}
                        iconStyle={{
                            background: `${company.color}`,
                            color: `${fontColorForBackground(company.color)}`
                        }}
                        icon={
                            <img
                                style={{
                                    width: company.image.width,
                                    marginTop: company.image.marginTop
                                }}
                                src={imagePath + company.image.path}
                                alt='company logo'
                            />
                        }
                    >
                        <h3 className='vertical-timeline-element-title fw-bold fst-italic'>
                            {company.position}
                        </h3>
                        <h5 className='vertical-timeline-element-subtitle'>
                            {company.company}
                        </h5>
                        <h6 className='vertical-timeline-element-subtitle'>
                            {company.location}
                        </h6>
                        <ul>
                            {company.descriptions.map((desc, i) => {
                                return (
                                    <li className='text-start' key={i}>
                                        {desc}
                                    </li>
                                )
                            })}
                        </ul>
                    </VerticalTimelineElement>
                )
            })}
        </VerticalTimeline>
    )
}
