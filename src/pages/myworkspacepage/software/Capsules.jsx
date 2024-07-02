import React from 'react'
import { styled } from '@mui/material/styles'
import { Paper, Chip } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5)
}))

const sx = {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    listStyle: 'none',
    p: 0.5,
    m: 0
}

function GitHubCapsule({ url }) {
    return (
        <Chip
            icon={<GitHubIcon />}
            label='GitHub'
            component='a'
            href={url}
            target='_blank'
            rel='noreferrer noopener'
            variant='outlined'
            clickable
            style={{
                marginRight: '5px'
            }}
        />
    )
}

function DeployedCapsule({ url }) {
    return (
        <Chip
            icon={<OpenInNewIcon />}
            label='Project'
            component='a'
            target='_blank'
            rel='noreferrer noopener'
            href={url}
            variant='outlined'
            clickable
        />
    )
}

export function LinkCapsules({ links }) {

    return (
        <Paper
            sx={sx}
            style={{
                backgroundColor: 'transparent'
            }}
            elevation={0}
        >
            {
                links && links.github ? (
                    <GitHubCapsule url={links.github} />
                ) : (
                    <></>
                )
            }
            {
                links && links.link ? (
                    <DeployedCapsule url={links.link} />
                ) : (
                    <></>
                )
            }
        </Paper>
    )
}

export function TechStackCapsules({ techStacks }) {

    return (
        <Paper
            sx={sx}
            style={{
                backgroundColor: 'transparent'
            }}
            elevation={0}
        >
            {techStacks.map((data, i) => {
                return (
                    <ListItem key={i}>
                        <Chip label={data} />
                    </ListItem>
                )
            })}
        </Paper>
    )
}
