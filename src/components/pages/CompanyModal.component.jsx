import React from 'react'

import {Modal, Typography, Box, Fade} from '@mui/material'
import {isMobile} from 'react-device-detect'

const CompanyModal = ({show, data, onHide}) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: window.screen.width * 0.75,
        height: window.screen.height * (isMobile ? 0.60 : 0.4),
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    }

    const textAreaStyle = {
        height: window.screen.height * (isMobile ? 0.60 * 0.5 : 0.4 * 0.5),
        overflow: 'auto',
        margin: '5px',
        textAlign: 'justify',
        padding: '20px'
    }

    return (
        <Modal
            open={show}
            onClose={onHide}
            aria-labelledby='modal-modal-title'
            area-labelledby='modal-modal-subtitle'
            aria-describedby='modal-modal-description'
        >
            <Fade in={show}>
                <Box sx={style}>
                    <Typography id='modal-modal-title' variant='h4' component='h2'>
                        {data.company}
                    </Typography>
                    <hr />
                    <Typography id='modal-modal-subtitle' variant='h6' component='h5'>
                        {data.position}
                    </Typography>
                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        <div style={textAreaStyle}>
                            Start: {data.start}
                            <br />
                            End: {data.end}
                            <br />
                            <ul>
                            {
                                data.descriptions.map((desc) => (
                                    <li>{desc}</li>
                                ))
                            }
                            </ul>
                        </div>

                    </Typography>
                </Box>
            </Fade>
        </Modal>
    )
}

export default CompanyModal