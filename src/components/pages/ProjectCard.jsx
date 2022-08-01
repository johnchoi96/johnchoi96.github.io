import React from 'react'
import './ProjectCard.styles.css'
import downloadBtn from '../../assets/images/download_btn.png'

const ProjectCard = ({title, path, isExternalPath}) => {
    return (
        <div className='card-body'>
            <h6>{title}</h6>
            <a href={process.env.PUBLIC_URL + path}>
                <img className='download-btn' src={downloadBtn} alt='download button'/>
            </a>
        </div>
    )
}

export default ProjectCard