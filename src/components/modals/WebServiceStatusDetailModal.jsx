import React, { useState, useContext, useEffect } from 'react'

import { Box, Modal, Button, Typography } from '@mui/material'
import { ThemeContext } from '../../App'
import { getBackgroundColor } from '../../Utils/colorUtils'
import {
    getRequestForPing,
    getRequestForUptime
} from '../../Utils/httpRequests'
import { url } from '../../Constants'

export default function WebServiceStatusDetailModal({ setModalOpen }) {
    const { isDarkMode } = useContext(ThemeContext)

    const [uptime, setUptime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        startTime: 'n/a'
    })
    const [serviceStatus, setServiceStatus] = useState('❌')

    const textColor = isDarkMode ? 'text-white' : 'text-dark'

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

    useEffect(() => {
        getRequestForUptime()
            .then((response) => response.json())
            .then((data) => {
                setUptime({
                    days: data.uptime.days,
                    hours: data.uptime.hours,
                    minutes: data.uptime.minutes,
                    seconds: data.uptime.seconds,
                    startTime: data.start_time.substring(0, 19)
                })
            })
            .catch((error) => console.log(error))
    }, [])

    useEffect(() => {
        getRequestForPing()
            .then((response) =>
                response.ok ? setServiceStatus('✅') : setServiceStatus('❌')
            )
            .catch((error) => {
                console.log(error)
                setServiceStatus('❌')
            })
    }, [])

    return (
        <div>
            <Modal
                open={true}
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
                        <span className={`${textColor} fw-bold`}>
                            Web Service Status
                        </span>
                    </Typography>
                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        <span className={`${textColor}`}>
                            Status: {serviceStatus}
                        </span>
                    </Typography>
                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        <span className={`${textColor}`}>
                            {`Up since ${uptime.startTime}`}
                        </span>
                    </Typography>
                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        <span className={`${textColor}`}>
                            {`Up for ${uptime.days} days, ${uptime.hours} hours, ${uptime.minutes} minutes, and ${uptime.seconds} seconds.`}
                        </span>
                    </Typography>
                    {serviceStatus === '❌' ? (
                        <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                            <p className={`${textColor}`}>
                                Downed status could be because the web service
                                has a self-signed cert and you will need to
                                visit the API at least once to approve access.
                            </p>
                            <a
                                className={`${textColor}`}
                                href={`${url}`}
                                target='_blank'
                                rel='noreferrer'
                            >
                                Click here to visit the web service.
                            </a>
                        </Typography>
                    ) : (
                        <></>
                    )}
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
