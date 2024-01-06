import React, { useEffect } from 'react'
import { getBackgroundColor } from '../../../Utils/colorUtils'
import { sendPageview } from '../../../analytics/useAnalyticsEventTracker'
import { getFontColorText } from '../../../Utils/colorUtils'
import { isMobile } from 'react-device-detect'
import default_software_img from '../../../assets/images/codeblock.svg'
import { TechStackCapsules, LinkCapsules } from './Capsules'
import { softwares } from './software_metadata'
import './SoftwareWorksPage.styles.css'

function ProjectCard({ projectName, projectDesc, techStacks, links, imgSrc }) {

    const containerHeight = isMobile ? '60vh' : '30vh'

    const fontSize = 15

    const imagePath = '/assets/softwares/images/'

    return (
        <div
            className='container'
            style={{
                height: containerHeight,
                width: 'auto',
                marginTop: '1rem',
                // backgroundColor: 'green'
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
                        className='project-card-img'
                        src={imgSrc ? imagePath + imgSrc : default_software_img}
                        alt='Default software pic'
                    />
                </div>
                <div className='col-lg-9'>
                    <div
                        className={`col align-self-center text-dark text-start project-card-content`}
                        style={{
                            position: 'relative',
                            left: '50%',
                            top: '40%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: '#DEE4E7'
                        }}
                    >
                        <span
                            style={{
                                fontSize: fontSize,
                                fontWeight: 'bold'
                            }}
                        >
                            {projectName}
                        </span>
                        <br />
                        <span
                            style={{
                                fontSize: fontSize
                            }}
                        >
                            {projectDesc}
                        </span>
                        <br />
                        <TechStackCapsules techStacks={techStacks} />
                        <LinkCapsules links={links} />
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
            {
                softwares.map((software, i) => {
                    return (
                        <ProjectCard
                            className='pb-5'
                            key={i}
                            projectName={software.name}
                            projectDesc={software.description}
                            techStacks={software.techStacks}
                            links={software.links}
                            imgSrc={software.imgSrc}
                        />
                    )
                })
            }
        </div>
    )
}
