/* eslint-disable react/jsx-key */
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectAboutMe } from './aboutMeSlice'

const AboutMe = (): JSX.Element => {
    const theme = useTheme()
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            gap: 8,
        }
    } as const
    const imgStyle = {
        objectFit: 'contain',
        minWidth: 0,
        width: '100%',
        height: '100%',
        maxWidth: theme.spacing(60),
        maxHeight: theme.spacing(60),
        flex: '1 1'
    } as const

    const { profession, details, photoUrl, photoAlt } = useSelector(selectAboutMe)
    return (
        <Box sx={containerStyle}>
            <img
                style={imgStyle}
                src={photoUrl}
                alt={photoAlt}
            />
            <Box sx={{flex: '1 1'}}>
                <Typography variant='overline' component='h2' mb={1}>About me</Typography>
                <Typography variant='h2' component='h3' mb={3}>{profession}</Typography>
                {
                    details.split('\n')
                        .filter(t => t.length > 0)
                        .map(chunkOfText => (
                            <Typography variant='body1' paragraph>{chunkOfText}</Typography>
                        ))
                }
            </Box>
        </Box >
    )
}

export default AboutMe
