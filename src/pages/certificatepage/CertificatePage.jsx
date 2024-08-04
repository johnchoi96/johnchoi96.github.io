import React, { useEffect } from 'react'
import { sendPageview } from '../../analytics/useAnalyticsEventTracker'
import { getBackgroundColor, getFontColorText } from '../../Utils/colorUtils'

function CertificateElement({ data }) {
    return (
        <div style={{ paddingBottom: '3rem' }}>
            <h5 className={`text-${getFontColorText()}`}>
                {data.title}
            </h5>
            <object
                data={process.env.PUBLIC_URL + data.pdfSrc}
                type='application/pdf'
                width='800px'
                height='650px'
            >
                <p className={`text-${getFontColorText()}`}>
                    Your web browser doesn't have a PDF plugin. Instead you can&nbsp;
                    <a href={process.env.PUBLIC_URL + data.pdfSrc}>
                        click here to download the PDF file.
                    </a>
                </p>
            </object>
        </div>
    )
}

export default function CertificatePage() {

    useEffect(() => {
        document.body.style.overflow = 'scroll'
    }, [])

    useEffect(() => {
        sendPageview('/certificates', 'Certificates Page')
    }, [])

    const certs = [
        {
            title: 'AWS Cloud Practitioner, AWS, 2024',
            pdfSrc: '/assets/files/aws_cloud_practitioner_cert.pdf'
        },
        {
            title: 'Software Security Certification of Completion, NC State University, 2017',
            pdfSrc: '/assets/files/Software_Security_Certification_of_Completion_John_Choi_Spring_2017.pdf'
        }
    ]

    return (
        <div style={{
            paddingTop: '44px',
            minHeight: (window.innerHeight - 44),
            backgroundColor: getBackgroundColor()
        }}>
            {
                certs.map((cert, i) => {
                    return <CertificateElement key={i} data={cert} />
                })
            }
        </div>
    )
}
