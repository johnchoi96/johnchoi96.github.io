import React from 'react'

const CertificatePage = () => {
    const ncsu_certification = '/assets/files/Software_Security_Certification_of_Completion_John_Choi_Spring_2017.pdf'
    return (
        <embed src={process.env.PUBLIC_URL + ncsu_certification} width='800px' height='650px' />
    )
}

export default CertificatePage