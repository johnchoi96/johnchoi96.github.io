import React, { useEffect } from 'react'
import ProjectCard from '../../components/myworkspacepage/ProjectCard'
import filenames from '../../assets/my-workspace-list.json'

export default function MyWorkspacePage({ canScroll }) {

    useEffect(() => {
        if (canScroll !== undefined && !canScroll) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    }, [canScroll])

    const {files, music_works} = filenames

    return (
        <div className='container'>
            <h3 className='text-white'>Software and Files</h3>
            <br />
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    files.map((file, i) => {
                        return (
                            <div className='col-lg-4 mb-3' key={i}>
                                <ProjectCard
                                    className='card'
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
            <h3 className='text-white'>Music Work</h3>
            <br />
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    music_works.map((music_work, i) => {
                        return (
                            <div className='col-lg-4 mb-3' key={i}>
                                <ProjectCard
                                    className='card'
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
