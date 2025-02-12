import React, { useState, useEffect } from 'react'
import { getElliePasswordCheck, getElliePayload } from '../../Utils/httpRequests'
import { Button } from '@mui/material'
import _ from 'lodash'

import gif1 from '../../assets/images/ellie/giphy.gif'
import gif2 from '../../assets/images/ellie/giphy-2.gif'

const ValentineAcceptedView = ({ elliePayload }) => {
    return (
        <>
            <h1>{elliePayload.offerAcceptedTitle}</h1>
            <p>{elliePayload.offerAcceptedBody}</p>
            <img src={gif2} alt='cute gif 2' />
        </>
    )
}

const AskView = ({ elliePayload, handleOfferAccepted }) => {
    const [yesButtonSize, setYesButtonSize] = useState({
        width: 150,
        height: 50
    })

    const handleNoClick = () => {
        setYesButtonSize({
            width: yesButtonSize.width * 1.1,
            height: yesButtonSize.height * 1.1
        })
    }

    return (
        <div>
            <h1>{elliePayload.greetingMsg}</h1>
            <div style={{display: 'flex', padding: '1rem', justifyContent: 'center'}}>
                <div style={{padding: '1rem'}}>
                    <Button
                        sx={{ width: `${yesButtonSize.width}px`, height: `${yesButtonSize.height}px`}}
                        variant='contained'
                        color='success'
                        onClick={handleOfferAccepted}
                    >
                        {elliePayload.yesMessage}
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
            <img src={gif1} alt='Cute logo' />
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

    return (
        <div>
            <h1
                onMouseEnter={() => setGreetingMsg(elliePayload.helloKorean)}
                onMouseLeave={() => setGreetingMsg('Hello!')}
            >
                {greetingMsg}
            </h1>
            <input
                type='password'
                value={passwordState.password}
                onChange={(e) => passwordState.setPassword(e.target.value)}
                placeholder='Enter password'
            />
            <button onClick={() => handleLogin(passwordState.password)}>Login</button>
        </div>
    )
}

const NotAvailableView = () => {
    return (
        <>
            <h1>Content Not Available Yet</h1>
            <p>Come back on Feb 14th ;)</p>
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
        helloKorean: ''
    })

    useEffect(() => {
        const targetDate = new Date(Date.UTC(2025, 1, 14, 14, 0, 0))
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
                    offerAcceptedBody: data['offerAcceptedBody']
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
        // if (!shouldBeVisible) {
        //     return <NotAvailableView />
        // }
        console.log(shouldBeVisible)
        console.debug(NotAvailableView)
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
