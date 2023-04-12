import React from 'react'
import { getBackgroundColor } from '../../Utils/colorUtils'

import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

import { getFontColorText } from '../../Utils/colorUtils'
import playlist from '../../assets/music-playlist.json'

import './MusicworksPage.styles.css'

function MusicPlayer({ src }) {
    return (
        <div>
            <AudioPlayer src={src} volume={0.5} />
        </div>
    )
}

function MusicCard({ title, src }) {
    return (
        <div className='music-card'>
            <h4 className={`text-${getFontColorText()}`}>{title}</h4>
            <MusicPlayer src={src} />
        </div>
    )
}

export default function MusicworksPage() {
    const { musics } = playlist

    return (
        <div
            className='container'
            style={{
                paddingTop: '44px',
                backgroundColor: getBackgroundColor(),
                minHeight: window.innerHeight - 44
            }}
        >
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {musics.map((music, i) => {
                    return (
                        <div className='col-lg-4 mb-3' key={i}>
                            <MusicCard
                                className='card'
                                title={music.title}
                                src={music.src}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
