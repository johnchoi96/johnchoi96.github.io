import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'

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

    const [open, setOpen] = useState(true)
    const handleClose = () => setOpen(false)

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style}>
                    <Typography id='modal-modal-title' variant='h6' component='h2'>
                        <span className='text-white fw-bold'>This page is being worked on!</span>
                    </Typography>
                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        <span className='text-white'>Expect things to be broken</span>
                    </Typography>
                    <br />
                    <Button onClick={handleClose} variant='contained'>OK</Button>
                </Box>
            </Modal>
        </div>
    )
}