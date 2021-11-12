import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectExperienceTitle } from './experienceSlice'
import ExperienceTimeline from './ExperienceTimeline'

const Experience = (): JSX.Element => {
    const title = useSelector(selectExperienceTitle)
    return (
        <div>
            <Typography variant='overline' component='h2' mb={1}>More about me</Typography>
            <Typography variant='h2' component='h3' mb={4}>{title}</Typography>
            <ExperienceTimeline />
        </div>
    )
}

export default Experience
