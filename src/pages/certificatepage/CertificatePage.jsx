import React, { useEffect } from 'react'

export default function CertificatePage({ canScroll }) {

    useEffect(() => {
        if (canScroll !== undefined && !canScroll) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'scroll'
        }
    }, [canScroll])

    const ncsu_certification = '/assets/files/Software_Security_Certification_of_Completion_John_Choi_Spring_2017.pdf'

    return (
        <embed src={process.env.PUBLIC_URL + ncsu_certification} width='800px' height='650px' />
    )
}
