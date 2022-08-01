import React from 'react'
import ProjectCard from './ProjectCard'
import filenames from '../../assets/my-workspace-list.json'

const MyWorkspacePage = () => {

    const {files, music_works} = filenames

    return (
        <div className='container'>
            <h3>Software and Files</h3>
            <br />
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    files.map((file) => {
                        return (
                            <div className='col-lg-4 mb-3'>
                                <ProjectCard
                                    className='card'
                                    key={file.path}
                                    title={file.name}
                                    path={file.path}
                                    isExternalPath={file.isExternalPath}
                                />
                            </div>

                        )
                    })
                }
            </div>

            <br />
            <h3>Music Work</h3>
            <br />
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    music_works.map((music_work) => {
                        return (
                            <div className='col-lg-4 mb-3'>
                                <ProjectCard
                                    className='card'
                                    key={music_work.path}
                                    title={music_work.name}
                                    path={music_work.path}
                                    isExternalPath={music_work.isExternalPath}
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