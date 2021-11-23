import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import TextImagePortfolioItem from '../PortfolioItem/TextImagePortfolioItem'
import PortfolioPhoto from '../PortfolioPhoto/PortfolioPhoto'
import { selectExperienceInfo } from './experienceSlice'
import ExperienceTimeline from './ExperienceTimeline'

const Experience = (): JSX.Element => {
    const { title, photoUrl, photoAlt } = useSelector(selectExperienceInfo)
    return (
        <TextImagePortfolioItem
            startWithText={false}
            textAreaChildren={
                <>
                    <Typography variant='h2' mb={1}>More about me</Typography>
                    <Typography variant='h3' mb={4}>{title}</Typography>
                    <ExperienceTimeline />
                </>
            }
            imageAreaChildren={
                <PortfolioPhoto
                    src={photoUrl}
                    alt={photoAlt}
                />
            }
        />
    )
}

export default Experience
