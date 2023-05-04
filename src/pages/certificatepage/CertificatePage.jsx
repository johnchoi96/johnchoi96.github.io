import React, { useEffect } from 'react'
import IncompletePageModal from '../../components/modals/IncompletePageModal'
import { getBackgroundColor } from '../../Utils/colorUtils'
import { sendPageview } from '../../analytics/useAnalyticsEventTracker'

export default function CertificatePage() {

    useEffect(() => {
        document.body.style.overflow = 'scroll'
    }, [])

    useEffect(() => {
        sendPageview('/certificates', 'Certificates Page')
    }, [])

    const ncsu_certification = '/assets/files/Software_Security_Certification_of_Completion_John_Choi_Spring_2017.pdf'

    return (
        <div style={{
            backgroundColor: getBackgroundColor()
        }}>
            <IncompletePageModal />
            <embed src={process.env.PUBLIC_URL + ncsu_certification} width='800px' height='650px' />
        </div>
    )
}
