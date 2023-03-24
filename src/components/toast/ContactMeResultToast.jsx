import React from 'react'
import { Alert, Snackbar } from '@mui/material'

export default function ContactMeResultToast({ state, setState }) {
    const content = {
        severity: state.didSucceed ? 'success' : 'error',
        message: state.didSucceed ? 'Your message has been sent!' : 'There was an error sending your message. Please try again later.'
    }

    return (
        <Snackbar
            open={state.isOpen}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            onClose={(e) => {
                const newState = { ...state }
                newState.isOpen = false
                setState(newState)
            }}
        >
            <Alert
                onClose={(e) => {
                    const newState = { ...state }
                    newState.isOpen = false
                    setState(newState)
                }}
                severity={content.severity}
                sx={{ width: '100%' }}
            >
                {content.message}
            </Alert>
        </Snackbar>
    )
}
