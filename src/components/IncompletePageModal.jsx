import React, { useState } from 'react'

import { Box, Modal, Button, Typography } from '@mui/material'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#09295A',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

export default function IncompletePageModal() {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    const [open, setOpen] = useState(true)

    const handleClose = async () => {
        await delay(350)
        setOpen(false)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style} justifyContent='flex-end' alignItems='flex-end'>
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                    >
                        <span className='text-white fw-bold'>
                            This page is being worked on!
                        </span>
                    </Typography>
                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        <span className='text-white'>
                            Expect things to be broken or not polished.
                        </span>
                    </Typography>
                    <br />
                    <Button
                        id='button'
                        onClick={handleClose}
                        variant='contained'
                    >
                        OK
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}
