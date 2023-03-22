import React, { useContext } from 'react'
import { Box, Button, Typography, Modal, TextField } from '@mui/material'
import { getBackgroundColor } from '../../pages/Utils/colorUtils'
import { ThemeContext } from '../../App'

export default function ContactMeModal({ setModalOpen }) {
    const { isDarkMode } = useContext(ThemeContext)

    const textColorClassName = isDarkMode ? 'text-white' : 'text-dark'
    const textColor = isDarkMode ? 'white' : 'black'

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: getBackgroundColor(),
        border: '2px solid #000000',
        boxShadow: 24,
        p: 4
    }

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    const handleClose = async () => {
        await delay(350)
        setModalOpen(false)
    }

    return (
        <div>
            <Modal
                open
                onClose={(e) => setModalOpen(false)}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box sx={style} justifyContent='flex-end' alignItems='flex-end'>
                    <Typography
                        id='modal-modal-title'
                        variant='h6'
                        component='h2'
                    >
                        <span className={`${textColorClassName} fw-bold`}>
                            Contact Me!
                        </span>
                    </Typography>
                    <br />
                    <div>
                        <label className={textColorClassName}>Subject</label>
                        <TextField
                            required
                            fullWidth
                            id='outlined-required'
                            label='Subject'
                            placeholder='Subject'
                            variant='filled'
                            inputProps={{ style: { color: textColor } }}
                        />
                    </div>
                    <br />
                    <div>
                        <label className={textColorClassName}>Message</label>
                        <TextField
                            required
                            fullWidth
                            id='outlined-multiline-flexible'
                            label='Message'
                            placeholder='Message'
                            multiline
                            maxRows={4}
                            inputProps={{ style: { color: textColor } }}
                        />
                    </div>
                    <br />
                    <div>
                        <label className={textColorClassName}>
                            Email (optional)
                        </label>
                        <TextField
                            fullWidth
                            id='outlined-flexible'
                            label='Email'
                            placeholder='foo@bar.com'
                            variant='filled'
                            inputProps={{ style: { color: textColor } }}
                        />
                    </div>
                    <br />
                    <Button
                        id='button'
                        onClick={handleClose}
                        variant='contained'
                    >
                        Submit
                    </Button>
                </Box>
            </Modal>
        </div>
    )
}
