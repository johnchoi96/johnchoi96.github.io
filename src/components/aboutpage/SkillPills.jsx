import React, { useRef, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import { Chip, Paper, Box, Avatar } from '@mui/material'
import { getTechnologies } from './technologiesData'
import './SkillPills.styles.css'

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
    display: 'inline-block'
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

// Thanks ChatGPT - animation is hard af :(
function SkillPillRow({ data, scrollToLeft }) {
    const scrollContainerRef = useRef(null)
    const scrollContentRef = useRef(null)
    const [animationDuration, setAnimationDuration] = useState('20s')
    const [isScrolling, setIsScrolling] = useState(false)

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current
        const scrollContent = scrollContentRef.current

        const updateAnimationDuration = () => {
            if (scrollContent) {
                const scrollWidth = scrollContent.scrollWidth
                const duration = (scrollWidth / 30) + 's' // Adjust speed here

                setAnimationDuration(duration)
                let direction = 'right'
                if (scrollToLeft) {
                    direction = 'left'
                }
                scrollContent.style.animation = `scroll-${direction} ${duration} linear infinite`
            }
        }

        const handleManualScroll = () => {
            setIsScrolling(true)
            scrollContent.style.animation = 'none'
        }

        const handleScrollEnd = () => {
            if (isScrolling) {
                setIsScrolling(false)
                updateAnimationDuration()
            }
        }

        updateAnimationDuration()

        scrollContainer.addEventListener('scroll', handleManualScroll)
        scrollContainer.addEventListener('scroll', handleScrollEnd, { once: true })

        return () => {
            scrollContainer.removeEventListener('scroll', handleManualScroll)
            scrollContainer.removeEventListener('scroll', handleScrollEnd)
        }
    }, [isScrolling, scrollToLeft])

    return (
        <Paper
            elevation={0}
            className='scroll-container no-scrollbar'
            ref={scrollContainerRef}
        >
            <div
                className='scroll-content'
                ref={scrollContentRef}
                style={{ animationDuration: animationDuration }}
            >
                {data.map((item, index) => (
                    <ListItem key={index}>
                        <SkillPill data={item} />
                    </ListItem>
                ))}
            </div>
        </Paper>
    )
}

export default function SkillPills() {
    const technologiesDataRows = getTechnologies(3)

    return (
        <Box
            className='scroll-container no-scrollbar'
            sx={{ display: 'flex', flexDirection: 'column' }}
        >
            {technologiesDataRows.map((row, index) => (
                <SkillPillRow key={index} data={row} scrollToLeft={index % 2 === 0}/>
            ))}
        </Box>
    )
}