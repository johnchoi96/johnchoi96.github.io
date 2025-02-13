import React, { useState, useEffect } from 'react'
import { getElliePasswordCheck, getElliePayload } from '../../Utils/httpRequests'
import { Button } from '@mui/material'
import _ from 'lodash'
import Tooltip from './Tooltip'

import gif1 from '../../assets/images/ellie/cute-dog.gif'
import gif2 from '../../assets/images/ellie/couple-ilu.gif'
import MessageModal from './MessageModal'

const ValentineAcceptedView = ({ elliePayload }) => {
    const [showTooltip, setShowTooltip] = useState(false)
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <MessageModal elliePayload={elliePayload} modalState={{showModal, setShowModal}} />
            <h1>{elliePayload.offerAcceptedTitle}</h1>
            <p>{elliePayload.offerAcceptedBody}</p>
            <img
                onClick={() => setShowModal(true)}
                style={{ justifyContent: 'center', cursor: 'pointer' }}
                src={gif2}
                alt='cute gif 2'
                width='40%'
            />
            <Tooltip text={elliePayload.offerAcceptedTooltip} showTooltipState={{ showTooltip, setShowTooltip }} />
        </>
    )
}

const AskView = ({ elliePayload, handleOfferAccepted }) => {
    const [yesButtonSize, setYesButtonSize] = useState({
        width: 150,
        height: 50,
        fontSize: 14
    })

    const handleNoClick = () => {
        setYesButtonSize({
            width: yesButtonSize.width * 1.1,
            height: yesButtonSize.height * 1.1,
            fontSize: yesButtonSize.fontSize * 1.1
        })
    }

    return (
        <div>
            <h1>{elliePayload.greetingMsg}</h1>
            <div style={{display: 'flex', padding: '1rem', justifyContent: 'center'}}>
                <div style={{padding: '1rem'}}>
                    <Button
                        sx={{
                            width: `${yesButtonSize.width}px`,
                            height: `${yesButtonSize.height}px`
                        }}
                        variant='contained'
                        color='success'
                        onClick={handleOfferAccepted}
                    >
                        <label style={{fontSize: `${yesButtonSize.fontSize}px`}}>
                            {elliePayload.yesMessage}
                        </label>
                    </Button>
                </div>
                <div style={{padding: '1rem'}}>
                    <Button
                        sx={{ width: '150px', height: '50px' }}
                        variant='contained'
                        color='error'
                        onClick={handleNoClick}
                    >
                        {elliePayload.noMessage}
                    </Button>
                </div>
            </div>
            <img src={gif1} alt='Cute logo' width='30%'/>
        </div>
    )
}

const AuthenticatedPage = ({ elliePayload }) => {
    const [offerAccepted, setOfferAccepted] = useState(false)

    const handleOfferAccepted = () => {
        setOfferAccepted(true)
    }

    const view = () => {
        if (!offerAccepted) {
            return <AskView elliePayload={elliePayload} handleOfferAccepted={handleOfferAccepted} />
        } else {
            return <ValentineAcceptedView elliePayload={elliePayload} />
        }
    }

    return (
        view()
    )
}

const LoginPage = ({ elliePayload, passwordState, handleLogin }) => {
    const [greetingMsg, setGreetingMsg] = useState('Hello!')
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh'
        }}>
            <h1
                onMouseEnter={() => setGreetingMsg(elliePayload.helloKorean)}
                onMouseLeave={() => setGreetingMsg('Hello!')}
            >
                {greetingMsg}
            </h1>
            <div style={{ display: 'flex' }}>
                <input
                    style={{ marginRight: '0.5rem' }}
                    type='password'
                    value={passwordState.password}
                    onChange={(e) => passwordState.setPassword(e.target.value)}
                    placeholder='Enter password'
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            handleLogin(passwordState.password)
                        }
                    }}
                />
                <button onClick={() => handleLogin(passwordState.password)}>Login</button>
            </div>
            <Tooltip text={elliePayload.authenticationTooltip} showTooltipState={{ showTooltip, setShowTooltip }} />
        </div>
    )
}

const NotAvailableView = () => {
    return (
        <>
            <h1>Content Not Available Yet</h1>
            <p>Come back on Feb 14th 5pm ;)</p>
        </>
    )
}

export default function ElliePage() {
    const [shouldBeVisible, setShouldBeVisible] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState("")

    const [elliePayload, setElliePayload] = useState({
        greetingMsg: '',
        yesMessage: '',
        noMessage: '',
        helloKorean: '',
        offerAcceptedTitle: '',
        offerAcceptedBody: '',
        authenticationTooltip: '',
        modelMessage: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit',
        modalTitle: 'Modal Title',
    })

    useEffect(() => {
        const targetDate = new Date(Date.UTC(2025, 1, 14, 22, 0, 0))
        const now = new Date()
        setShouldBeVisible(now > targetDate)
    }, [])

    useEffect(() => {
        getElliePayload()
            .then(response => {
                if (response.status !== 200) {
                    throw Error('could not connect to server')
                }
                return response.json()
            })
            .then(data => {
                const newPayload = {
                    greetingMsg: data['greetingMessage'],
                    yesMessage: data['yesMessage'],
                    noMessage: data['noMessage'],
                    helloKorean: data['helloKorean'],
                    offerAcceptedTitle: data['offerAcceptedTitle'],
                    offerAcceptedBody: data['offerAcceptedBody'],
                    offerAcceptedTooltip: data['offerAcceptedTooltip'],
                    authenticationTooltip: data['authenticationTooltip'],
                    modalMessage: data['modalMessage'],
                    modalTitle: data['modalTitle']
                }
                setElliePayload(newPayload)
            })
    }, [])

    const handleLogin = (arg) => {
        if (_.isNil(arg)) {
            return
        }
        getElliePasswordCheck(arg)
            .then(response => {
                if (response.status !== 200) {
                    throw Error('could not connect to server')
                }
                return response.json()
            })
            .then(data => {
                if (Boolean(data)) {
                    setIsAuthenticated(true)
                } else {
                    alert('Incorrect password. Try again.')
                }
            })
    };

    const content = () => {
        const isDev = process.env.NODE_ENV === 'development'
        if (!isDev && !shouldBeVisible) {
            return <NotAvailableView />
        }
        if (isAuthenticated) {
            return <AuthenticatedPage elliePayload={elliePayload} />
        } else {
            return (
                <LoginPage
                    elliePayload={elliePayload}
                    passwordState={{password, setPassword}}
                    handleLogin={handleLogin}
                />
            )
        }
    }
    return (
        <div style={{
            paddingTop: '44px',
            backgroundColor: '#EEC1CE',
            minHeight: (window.innerHeight - 44)
        }}>
            {content()}
        </div>
    );
}
