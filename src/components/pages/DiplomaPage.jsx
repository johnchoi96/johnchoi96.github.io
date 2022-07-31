import React from 'react'

const DiplomaPage = () => {
    const tosu_bs_cse = '/assets/files/tOSU_BSCSE_Diploma_JohnChoi.pdf'
    return (
        <div className='diploma-body' style={{
                backgroundColor: '#A7B1B7'
            }}>
            <p>The Ohio State University B.S Computer Science and Engineering</p>
            <embed src={process.env.PUBLIC_URL + tosu_bs_cse} width='800px' height='600px' />
        </div>
    )
}

export default DiplomaPage