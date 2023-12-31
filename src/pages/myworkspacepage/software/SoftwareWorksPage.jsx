import React, { useEffect, useContext } from 'react'
import { getBackgroundColor } from '../../../Utils/colorUtils'
import { sendPageview } from '../../../analytics/useAnalyticsEventTracker'
import { getFontColorText } from '../../../Utils/colorUtils'
import { isMobile } from 'react-device-detect'
import { ThemeContext } from '../../../App'

import default_software_img from '../../../assets/images/codeblock.svg'

function ProjectCard({ projectName, projectDesc, techStacks }) {

    const { isDarkMode } = useContext(ThemeContext)

    const containerHeight = isMobile ? '60vh' : '30vh'

    const introFontSize = Math.max(window.innerWidth, window.innerHeight) * 0.02 // font is 2 percent of the longest side of screen

    return (
        <div
            className='container'
            style={{
                height: containerHeight,
                width: 'auto',
                marginTop: '1rem',
                backgroundColor: 'green'
            }}
        >
            <div className='row'>
                <div
                    className='col-lg-3 mb-5'
                    style={{
                        maxHeight: '35vh'
                    }}
                >
                    <img
                        src={default_software_img}
                        alt='Default software pic'
                        height='100%'
                    />
                </div>
                <div className='col-lg-9' style={{backgroundColor: 'red'}}>
                    <div
                        className={`col align-self-center text-${
                            isDarkMode ? 'white' : 'dark'
                        } text-start`}
                        style={{
                            position: 'relative',
                            left: '50%',
                            top: '40%',
                            transform: 'translate(-50%, -50%)'
                        }}
                    >
                        <span
                            style={{
                                fontSize: introFontSize,
                                fontWeight: 'bold'
                            }}
                        >
                            {projectName}
                        </span>
                        <br />
                        <span
                            style={{
                                fontSize: introFontSize
                            }}
                        >
                            {projectDesc}
                        </span>
                        <br />
                        <span
                            style={{
                                fontSize: introFontSize
                            }}
                        >
                            {techStacks}
                        </span>
                        <br />
                        <span
                            style={{
                                fontSize: introFontSize
                            }}
                        >
                            {techStacks}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function SoftwareWorksPage() {
    useEffect(() => {
        document.body.style.overflow = 'scroll'
    }, [])

    useEffect(() => {
        sendPageview('/myworkspace/music', 'Music Page')
    }, [])

    return (
        <div
            style={{
                paddingTop: '44px',
                paddingBottom: '50px',
                backgroundColor: getBackgroundColor(),
                minHeight: window.innerHeight - 44
            }}
        >
            <h1 className={`text-${getFontColorText()}`}>Software Works</h1>
            <h6 className={`text-${getFontColorText()}`}>
                <i>
                    Contains some of the side projects I've worked on
                </i>
            </h6>
            {/* <div className='container'>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    <div className='col-lg-4 mb-3'>

                    </div>
                </div>
            </div> */}
            <ProjectCard
                projectName='Web Service'
                projectDesc='Personal web service'
                techStacks={['Java', 'NoSQL', 'AWS']}
            />
            <ProjectCard
                projectName='Web Service'
                projectDesc='Personal web service'
                techStacks={['Java', 'NoSQL', 'AWS']}
            />
            <ProjectCard
                projectName='Web Service'
                projectDesc='Personal web service'
                techStacks={['Java', 'NoSQL', 'AWS']}
            />
            <ProjectCard
                projectName='Web Service'
                projectDesc='Personal web service'
                techStacks={['Java', 'NoSQL', 'AWS']}
            />
        </div>
    )
}
