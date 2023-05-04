import React, { useEffect, useContext } from 'react'
import ProjectCard from '../../components/myworkspacepage/ProjectCard'
import filenames from '../../assets/my-workspace-list.json'
import IncompletePageModal from '../../components/modals/IncompletePageModal'
import { ThemeContext } from '../../App'
import { getBackgroundColor } from '../../Utils/colorUtils'
import { sendPageview } from '../../analytics/useAnalyticsEventTracker'

// FIXME: optimize
export default function SoftwareWorksPage() {
    const { isDarkMode } = useContext(ThemeContext)

    const textColor = isDarkMode ? 'text-white' : 'text-dark'

    useEffect(() => {
        document.body.style.overflow = 'scroll'
    }, [])

    useEffect(() => {
        sendPageview(
            '/myworkspace/software',
            'Software Page'
        )
    })

    const { files, music_works } = filenames

    return (
        <div
            className='container'
            style={{
                backgroundColor: getBackgroundColor()
            }}
        >
            <IncompletePageModal />
            <h3 className={`${textColor}`}>Software and Files</h3>
            <br />
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {files.map((file, i) => {
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
                })}
            </div>

            <br />
            <h3 className={`${textColor}`}>Music Work</h3>
            <br />
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {music_works.map((music_work, i) => {
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
                })}
            </div>
        </div>
    )
}
