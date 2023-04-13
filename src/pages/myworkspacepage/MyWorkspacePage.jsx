import React, { useEffect } from 'react'
import {
    getBackgroundColor,
    getFontColorText
} from '../../Utils/colorUtils'
import { Link } from 'react-router-dom'

import './MyWorkspacePage.styles.css'

import codeblockSvg from '../../assets/images/codeblock.svg'
import musicSvg from '../../assets/images/music.svg'

function MyWorkspaceCard({ title, image }) {
    return (
        <div
            className='workspace-card p-1 h-100'
            style={{ maxHeight: '30rem' }}
            role='button'
        >
            <img
                className='w-50 mt-2 align-self-center'
                src={image}
                alt='logo'
            />
            <h3 className='text-dark'>{title}</h3>
        </div>
    )
}

export default function MyWorkspacePage({ canScroll }) {

    useEffect(() => {
        if (canScroll !== undefined && !canScroll) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    }, [canScroll])

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
                        <Link to='/myworkspace/software'>
                            <MyWorkspaceCard
                                title='Software'
                                image={codeblockSvg}
                            />
                        </Link>
                        <Link to='/myworkspace/music'>
                            <MyWorkspaceCard
                                title='Music'
                                image={musicSvg}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
