import { Typography } from '@mui/material'
import { Box, useTheme } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import HardSkillItemList from './HardSkillItemList'
import { selectHardSkillInfo } from './hardSkillsSlice'

const HardSkills = (): JSX.Element => {
    const theme = useTheme()
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end',
            gap: 8,
        },
    } as const
    const { info, title } = useSelector(selectHardSkillInfo)
    return (
        <Box sx={containerStyle}>
            <HardSkillItemList flex='1 1 33%' width='100%' />
            <Box flex='1 1 66%'>
                <Typography variant='h3' mb={3}>{title}</Typography>
                {
                    info.split('\n')
                        .filter(t => t.length > 0)
                        .map(chunkOfText => (
                            // eslint-disable-next-line react/jsx-key
                            <Typography variant='body1' paragraph>{chunkOfText}</Typography>
                        ))
                }
            </Box>
        </Box>
    )
}

export default HardSkills
