import React, { useContext } from 'react'

import { Box, Modal, Button, Typography } from '@mui/material'
import { ThemeContext } from '../../App'
import { getBackgroundColor } from '../../Utils/colorUtils'
export default function MessageModal({ elliePayload, modalState }) {
    const { isDarkMode } = useContext(ThemeContext)

    const textColor = isDarkMode ? 'text-white' : 'text-dark'

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        bgcolor: getBackgroundColor(),
        border: '2px solid #000000',
        boxShadow: 24,
        p: 4
    }

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    const handleClose = async () => {
        await delay(350)
        modalState.setShowModal(false)
    }

    return (
        <div>
            <Modal
                open={modalState.showModal}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={{ ...style, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                    >
                        <span className={`${textColor} fw-bold`}>
                            {elliePayload.modalTitle}
                        </span>
                    </Typography>

                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        <span className={`${textColor}`}>
                            {elliePayload.modalMessage.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </span>
                    </Typography>

                    <br />
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                        <Button
                            id='button'
                            onClick={handleClose}
                            variant='contained'
                            sx={{ backgroundColor: '#EEC1CE', '&:hover': { backgroundColor: '#0fbfa0' } }}
                        >
                            ❤️
                        </Button>
                    </Box>

                </Box>
            </Modal>
        </div>
    )
}
