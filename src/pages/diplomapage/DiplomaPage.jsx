import React, { useEffect } from 'react'

export default function DiplomaPage({ canScroll }) {

    useEffect(() => {
        if (canScroll !== undefined && !canScroll) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    }, [canScroll])

    const tosu_bs_cse = '/assets/files/tOSU_BSCSE_Diploma_JohnChoi.pdf'

    const ratio = 1.5
    const length1 = Math.max(window.innerWidth, window.innerHeight) * 0.4
    const length2 = length1 * ratio

    return (
        <div style={{
                paddingTop: '44px',
                backgroundColor: '#A7B1B7',
                minHeight: (window.innerHeight - 44)
            }}>
            <p>The Ohio State University B.S Computer Science and Engineering</p>
            <embed
                src={process.env.PUBLIC_URL + tosu_bs_cse}
                width={Math.max(length1, length2)}
                height={Math.min(length1, length2)}
            />
        </div>
    )
}
