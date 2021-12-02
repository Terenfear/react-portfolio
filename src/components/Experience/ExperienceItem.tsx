/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Link, styled, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { ExperiencePeriod } from './experienceSlice'
import { v4 as uuid4 } from 'uuid'
import { ReactComponent as TimelineDot } from './timeline-dot.svg'
import { MultilineTextTypographiesList } from '../../utils/reactUtils'

const ExperienceItem: React.FC<ExperiencePeriod & { isLast: boolean }> =
    (props) => {
        const { period, title, link, description, isLast } = props
        const dateElementId = useMemo(() => uuid4(), [])
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
                <Typography id={dateElementId}
                    sx={{
                        gridArea: PERIOD,
                        color: 'primary.main'
                    }}>
                    {`${period.from} - ${period.to}`}
                </Typography>
                <Connector style={{ gridArea: CONNECTOR }} />
                <Box style={{ gridArea: DESCRIPTION }}
                    mb={isLast ? 0 : 3}
                    mt={1}
                    aria-describedby={dateElementId}>
                    {link ?
                        <Link variant='h4'
                            color='text.secondary'
                            role='heading'
                            aria-level={4}
                            mb={2}
                            display='block'
                            href={link}>
                            {title}
                        </Link> :
                        <Typography variant='h4' mb={2}>{title}</Typography>
                    }
                    <MultilineTextTypographiesList variant='subtitle1'
                        multilineText={description} />
                </Box>
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
