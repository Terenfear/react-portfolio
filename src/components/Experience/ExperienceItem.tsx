import { Box, Link, styled, Typography } from '@mui/material'
import React from 'react'
import { ExperiencePeriod } from './experienceSlice'
import { ReactComponent as TimelineDot } from './timeline-dot.svg'

const ExperienceItem = (props: ExperiencePeriod): JSX.Element => {
    const { period, title, link, description } = props
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateAreas: `
                '${DOT} ${PERIOD}'
                '${CONNECTOR} ${DESCRIPTION}'
            `,
            gridTemplateColumns: (t) => `${t.spacing(4.5)} auto`,
            alignItems: 'center',
            columnGap: (t) => t.spacing(2)
        }}>
            <TimelineDot style={{ gridArea: DOT }} />
            <Typography style={{ gridArea: PERIOD }}>
                {`${period.from} - ${period.to}`}
            </Typography>
            <Connector style={{gridArea: CONNECTOR}} />
            <div style={{ gridArea: DESCRIPTION }}>
                {link ?
                    <Link variant='h3' href={link}>{title}</Link> :
                    <Typography variant='h3'>{title}</Typography>
                }
                <Typography variant='body2'>{description}</Typography>
            </div>
        </Box>
    )
}

const Connector = styled('div')(({ theme }) => ({
    width: 0,
    height: '100%',
    borderLeft: `3px solid ${theme.palette.primary.main}`,
    justifySelf: 'center'
}))

const DOT = 'dot'
const PERIOD = 'period'
const CONNECTOR = 'connector'
const DESCRIPTION = 'description'

export default ExperienceItem
