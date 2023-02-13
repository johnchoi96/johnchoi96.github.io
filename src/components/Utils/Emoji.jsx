import React from 'react'

export default function Emoji({symbol}) {
    return (
        <span
            className='emoji'
            role='img'
        >
            {symbol}
        </span>
    )
}
