import { Box, BoxProps } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ExperienceItem from './ExperienceItem'
import { selectExperiencePeriods } from './experienceSlice'

const ExperienceTimeline = (props: BoxProps): JSX.Element => {
    const periods = useSelector(...selectExperiencePeriods)
    return (
        <Box {...props}>
            {periods.map((p, i) =>
                <ExperienceItem {...p}
                    key={p.id}
                    isLast={i == periods.length - 1} />
            )}
        </Box>
    )
}

export default ExperienceTimeline
