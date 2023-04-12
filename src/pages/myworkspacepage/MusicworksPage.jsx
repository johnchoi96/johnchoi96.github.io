import React, { useEffect } from 'react'
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

export default function MusicworksPage({ canScroll }) {
    const { musics } = playlist

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
            <h1 className={`text-${getFontColorText()}`}>Music Works</h1>
            <h6 className={`text-${getFontColorText()}`}>
                <i>
                    Contains audio files for some of the musical works I've done
                    in the past as a drummer (in chronological order)
                </i>
            </h6>
            <p>
                <a className='btn btn-danger' target='_blank' rel='noreferrer' href='https://www.youtube.com/playlist?list=PLzSF0uzve8SNz6nASFx1tez8l7wjrpHkI'>YouTube Playlist</a>
                <a className='btn btn-info ms-2' target='_blank' rel='noreferrer' href='https://threedegreesband.bandcamp.com/album/delta'>Three Degrees BandCamp</a>
            </p>
            <div className='container'>
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
        </div>
    )
}
