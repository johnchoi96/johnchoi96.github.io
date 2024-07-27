import React from 'react'
import { styled } from '@mui/material/styles'
import { Chip, Paper, Box, Avatar } from '@mui/material'
import { getTechnologies } from './technologiesData'
import './SkillPills.styles.css'

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
    display: 'inline-block' // Make each list item inline-block to avoid wrapping
}))

function SkillPill({ data }) {
    return (
        <Chip
            avatar={<Avatar src={data.srcUrl} />}
            label={data.name}
            color={data.color}
        />
    )
}

function SkillPillRow({ data }) {
    return (
        <Paper
            elevation={0}
            className='no-scrollbar'
            component='ul'
        >
            {data.map((item, index) => (
                <ListItem key={index}>
                    <SkillPill data={item} />
                </ListItem>
            ))}
        </Paper>
    )
}

export default function SkillPills() {
    const technologiesDataRows = getTechnologies(3)

    return (
        <Box
            className='no-scrollbar'
            sx={{ display: 'flex', flexDirection: 'column' }}
        >
            {technologiesDataRows.map((row, index) => (
                <SkillPillRow key={index} data={row} />
            ))}
        </Box>
    )
}