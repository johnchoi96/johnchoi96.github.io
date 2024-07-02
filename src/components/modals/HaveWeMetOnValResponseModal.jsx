import React, { useState, useContext, useEffect } from 'react'
import {
    Box,
    Modal,
    Button,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { ThemeContext } from '../../App'
import { getBackgroundColor } from '../../Utils/colorUtils'
import {
    postRequestForHaveWeMetOnVal
} from '../../Utils/httpRequests'
import { convertEpochSecondsToEST } from '../../Utils/timeUtils'

function MatchMetadata({ metadata }) {
    return (
        <div>
            <h4>
                Match Info:
            </h4>
            <p>
                <ul>
                    <li>Map: {metadata.map}</li>
                    <li>Length: {metadata.length}</li>
                    <li>Rounds Played: {metadata.rounds_played}</li>
                    <li>Game Mode: {metadata.game_mode}</li>
                    <li>Game Time: {convertEpochSecondsToEST(metadata.game_start_time)}</li>
                </ul>
            </p>
        </div>
    )
}

function PlayerMetadata({ playerData }) {
    return (
        <div>
            <h4>
                Player Info:
            </h4>
            <p>
                <ul>
                    <li>Username: {playerData.username}</li>
                    <li>Tag: {playerData.tag}</li>
                    <li>Agent: {playerData.character}</li>
                    <li>Rank: {playerData.tier}</li>
                    <li>Kills: {playerData.kills}</li>
                    <li>Deaths: {playerData.deaths}</li>
                    <li>Assists: {playerData.assists}</li>
                    <li>Headshots: {playerData.headshots}</li>
                </ul>
            </p>
        </div>
    )
}

export default function HaveWeMetOnValResponseModal({ inputData, setModalOpen }) {
    const { isDarkMode } = useContext(ThemeContext)

    const textColor = isDarkMode ? 'text-white' : 'text-dark'

    const [matches, setMatches] = useState([])
    const [loadingFinished, setLoadingFinished] = useState(false)
    const [errorFound, setErrorFound] = useState(false)
    const [serverMessage, setServerMessage] = useState('')

    const [expanded, setExpanded] = useState()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: getBackgroundColor(),
        border: '2px solid #000000',
        boxShadow: 24,
        p: 4
    }

    useEffect(() => {
        setMatches([])
        setLoadingFinished(false)
        setErrorFound(false)
        setServerMessage('')
        postRequestForHaveWeMetOnVal(inputData)
            .then((response) => {
                if (response.status >= 200 && response.status <= 204) {
                    return response.json()
                } else {
                    throw Error(response.json())
                }
            })
            .then((data) => {
                console.log(data)
                if (data.error !== undefined) {
                    setErrorFound(true)
                    setServerMessage(data.error.message)
                } else {
                    setErrorFound(false)
                    setMatches(data.matches)
                }
            })
            .catch((error) => {
                setServerMessage('Something went wrong with the server. Please try again.')
            })
            .finally(() => {
                setLoadingFinished(true)
            })
    }, [inputData])

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    const handleClose = async () => {
        await delay(350)
        setModalOpen(false)
    }

    const handleChangeAccordion = (panelId) => (event, newExpanded) => {
        setExpanded(newExpanded ? panelId : false)
    }

    function renderAccordion() {
        const accordions = (
            matches.length > 0 ? matches.map((match, i) => (
                <Accordion expanded={expanded === i} onChange={handleChangeAccordion(i)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls='panel1-content'
                        id='panel1-header'
                    >
                        Match {i + 1}
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            maxHeight: '200px',
                            overflowY: 'scroll'
                        }}
                    >
                        <p>
                            <MatchMetadata metadata={match.match.metadata} />
                            <br />
                            <PlayerMetadata playerData={match.player} />
                        </p>
                    </AccordionDetails>
                </Accordion>
            )) : <p>No match found</p>
        )
        const errorMessage = (
            <p>{serverMessage}</p>
        )
        return errorFound ? errorMessage : accordions
    }

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
                            Have we?
                        </span>
                    </Typography>
                    <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                        <span className={`${textColor}`}>
                            {
                                loadingFinished ? (
                                    renderAccordion()
                                ) : (
                                    <p>Loading...</p>
                                )
                            }
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
