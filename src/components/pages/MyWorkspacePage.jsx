import React from 'react'
import ProjectCard from './ProjectCard'
import filenames from '../../assets/software_files.json'

const MyWorkspacePage = () => {

    const {files, music_works} = filenames

    return (
        <div className='container'>

            <h3>Software and Files</h3>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    files.map((file) => {
                        return (
                            <div className='col'>
                                <ProjectCard
                                    className='card'
                                    key={file.name.id}
                                    title={file.name}
                                    path={file.path}
                                />
                            </div>

                        )
                    })
                }
            </div>

            <h3>Music Work</h3>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    music_works.map((music_work) => {
                        return (
                            <div className='col'>
                                <ProjectCard
                                    className='card'
                                    key={music_work.name.id}
                                    title={music_work.name}
                                    path={music_work.path}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MyWorkspacePage