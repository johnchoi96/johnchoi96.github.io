import React from 'react'
import { Alert, Snackbar } from '@mui/material'

export default function SuccessToast({ open, setOpen }) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            onClose={(e) => setOpen(false)}
        >
            <Alert
                onClose={(e) => setOpen(false)}
                severity='success'
                sx={{ width: '100%' }}
            >
                Your message has been sent!
            </Alert>
        </Snackbar>
    )
}
