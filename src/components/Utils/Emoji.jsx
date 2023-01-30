import React from 'react'

const Emoji = ({symbol}) => (
    <span
        className='emoji'
        role='img'
    >
        {symbol}
    </span>
)

export default Emoji