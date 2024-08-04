import React, { useEffect } from 'react'
import { sendPageview } from '../../analytics/useAnalyticsEventTracker'

export default function DiplomaPage() {

    useEffect(() => {
        document.body.style.overflow = 'scroll'
    }, [])

    useEffect(() => {
        sendPageview('/diplomas', 'Diplomas Page')
    }, [])

    const tosu_bs_cse = '/assets/files/tOSU_BSCSE_Diploma_JohnChoi.pdf'

    const ratio = 1.5
    const length1 = Math.max(window.innerWidth, window.innerHeight) * 0.5
    const length2 = length1 * ratio

    return (
        <div style={{
            paddingTop: '44px',
            backgroundColor: '#A7B1B7',
            minHeight: (window.innerHeight - 44)
        }}>
            <h4>The Ohio State University B.S Computer Science and Engineering</h4>
            <object
                data={process.env.PUBLIC_URL + tosu_bs_cse}
                type='application/pdf'
                width={Math.max(length1, length2)}
                height={Math.min(length1, length2)}
            >
                <p>
                    Your web browser doesn't have a PDF plugin. Instead you can&nbsp;
                    <a href={process.env.PUBLIC_URL + tosu_bs_cse}>
                        click here to download the PDF file.
                    </a>
                </p>
            </object>
        </div>
    )
}
