import React from 'react'
import { Snackbar, Alert } from '@mui/material'

export default function SuccessToast({ open, setOpen }) {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity='success'
                    sx={{ width: '100%' }}
                >
                    This is a success message!
                </Alert>
            </Snackbar>
        </div>
    )
}
