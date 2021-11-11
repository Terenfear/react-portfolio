import { Box, BoxProps } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ExperienceItem from './ExperienceItem'
import { selectExperiencePeriods } from './experienceSlice'

const ExperienceTimeline = (props: BoxProps): JSX.Element => {
    const periods = useSelector(...selectExperiencePeriods)
    return (
        <Box {...props}>
            {/* TODO(Nov 11, 2021): use a separate prop for the key? */}
            {periods.map(p => <ExperienceItem key={p.title} {...p} />)}
        </Box>
    )
}

export default ExperienceTimeline
