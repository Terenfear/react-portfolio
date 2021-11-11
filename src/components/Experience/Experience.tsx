import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectExperienceTitle } from './experienceSlice'
import ExperienceTimeline from './ExperienceTimeline'

const Experience = (): JSX.Element => {
    const title = useSelector(selectExperienceTitle)
    return (
        <div>
            <Typography>More about me</Typography>
            <Typography variant='h2'>{title}</Typography>
            <ExperienceTimeline />
        </div>
    )
}

export default Experience
