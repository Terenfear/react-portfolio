import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import PortfolioPhoto from '../PortfolioPhoto/PortfolioPhoto'
import PortfolioSimpleContainer from '../PortfolioSimpleContainer/PortfolioSimpleContainer'
import { selectExperienceInfo } from './experienceSlice'
import ExperienceTimeline from './ExperienceTimeline'

const Experience = (): JSX.Element => {
    const { title, photoUrl, photoAlt } = useSelector(selectExperienceInfo)
    return (
        <PortfolioSimpleContainer>
            <PortfolioPhoto
                style={{ flex: '1 1 33%' }}
                src={photoUrl}
                alt={photoAlt}
            />
            <div style={{ flex: '1 1 66%' }}>
                <Typography variant='overline' component='h2' mb={1}>More about me</Typography>
                <Typography variant='h2' component='h3' mb={4}>{title}</Typography>
                <ExperienceTimeline />
            </div>
        </PortfolioSimpleContainer>

    )
}

export default Experience
