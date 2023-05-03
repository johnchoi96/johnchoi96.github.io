import React, { useEffect, useContext } from 'react'
import { getBackgroundColor, getFontColorText } from '../../Utils/colorUtils'
import { Link } from 'react-router-dom'

import './MyWorkspacePage.styles.css'

import codeblockSvg from '../../assets/images/codeblock.svg'
import musicSvg from '../../assets/images/music.svg'
import { sendPageview } from '../../analytics/useAnalyticsEventTracker'
import { ThemeContext } from '../../App'

function MyWorkspaceCard({ title, image }) {
    const { isDarkMode } = useContext(ThemeContext)
    return (
        <div
            className='workspace-card p-1 h-100'
            style={{ maxHeight: '30rem', backgroundColor: isDarkMode ? '#343741' : 'white' }}
            role='button'
        >
            <img
                className='w-50 mt-2 align-self-center'
                src={image}
                alt='logo'
            />
            <h3 className={`text-${getFontColorText()}`}>{title}</h3>
        </div>
    )
}

export default function MyWorkspacePage() {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
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
            <div
                className='container'
                style={{
                    backgroundColor: getBackgroundColor()
                }}
            >
                <h1 className={`text-${getFontColorText()}`}>My Workspace</h1>

                <div className='container mt-5'>
                    <div className='row row-cols-1 row-cols-md-2 g-4'>
                        <Link
                            style={{textDecoration: 'none'}}
                            to='/myworkspace/software'
                            onClick={() =>
                                sendPageview(
                                    '/myworkspace/software',
                                    'Software Page'
                                )
                            }
                        >
                            <MyWorkspaceCard
                                title='Software'
                                image={codeblockSvg}
                            />
                        </Link>
                        <Link
                            style={{textDecoration: 'none'}}
                            to='/myworkspace/music'
                            onClick={() =>
                                sendPageview('/myworkspace/music', 'Music Page')
                            }
                        >
                            <MyWorkspaceCard title='Music' image={musicSvg} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
