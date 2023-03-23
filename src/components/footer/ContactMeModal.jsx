import React, { useState, useContext } from 'react'
import { Box, Button, Typography, Modal, TextField } from '@mui/material'
import { getBackgroundColor } from '../../Utils/colorUtils'
import { ThemeContext } from '../../App'

export default function ContactMeModal({ setModalOpen }) {
    const { isDarkMode } = useContext(ThemeContext)

    const [subjectHasError, setSubjectHasError] = useState(false)
    const [messageHasError, setMessageHasError] = useState(false)
    const [emailHasError, setEmailHasError] = useState(false)

    const [subjectContent, setSubjectContent] = useState('')
    const [messageContent, setMessageContent] = useState('')
    const [emailContent, setEmailContent] = useState('')

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
        if (!validateFormInput()) {
            return
        }
        await delay(350)
        setModalOpen(false)
    }

    function validateFormInput() {
        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        }

        var formValid = true
        setSubjectHasError(false)
        setMessageHasError(false)
        setEmailHasError(false)
        // check if subject exists
        if (subjectContent.length <= 0) {
            formValid = false
            setSubjectHasError(true)
        }
        // check if message exists
        if (messageContent.length <= 0) {
            formValid = false
            setMessageHasError(true)
        }
        // check if email exists, and if so, check if format is correct
        if (emailContent.length > 0 && !validateEmail(emailContent)) {
            formValid = false
            setEmailHasError(true)
        }
        return formValid
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
                            error={subjectHasError}
                            id='outlined-required'
                            label='Subject'
                            placeholder='Subject'
                            variant='filled'
                            inputProps={{ style: { color: textColor } }}
                            onChange={(e) => setSubjectContent(e.target.value)}
                        />
                    </div>
                    <br />
                    <div>
                        <label className={textColorClassName}>Message</label>
                        <TextField
                            required
                            fullWidth
                            error={messageHasError}
                            id='outlined-multiline-flexible'
                            label='Message'
                            placeholder='Message'
                            multiline
                            maxRows={4}
                            inputProps={{ style: { color: textColor } }}
                            onChange={(e) => setMessageContent(e.target.value)}
                        />
                    </div>
                    <br />
                    <div>
                        <label className={textColorClassName}>
                            Email (optional)
                        </label>
                        <TextField
                            fullWidth
                            error={emailHasError}
                            id='outlined-flexible'
                            label='Email'
                            placeholder='foo@bar.com'
                            variant='filled'
                            inputProps={{ style: { color: textColor } }}
                            onChange={(e) => setEmailContent(e.target.value)}
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
