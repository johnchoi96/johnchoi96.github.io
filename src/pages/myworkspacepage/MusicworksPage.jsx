import React from 'react'
import { getBackgroundColor } from '../../Utils/colorUtils'


export default function MusicworksPage() {
    return (
        <div
            style={{
                paddingTop: '44px',
                backgroundColor: getBackgroundColor(),
                minHeight: window.innerHeight - 44
            }}
        >
            <ReactAudioPlayer />
        </div>
    )
}
