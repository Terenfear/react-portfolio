/* eslint-disable react/jsx-key */
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import PortfolioPhoto from '../PortfolioPhoto/PortfolioPhoto'
import PortfolioSimpleContainer from '../PortfolioSimpleContainer/PortfolioSimpleContainer'
import { selectAboutMe } from './aboutMeSlice'

const AboutMe = (): JSX.Element => {
    const { profession, details, photoUrl, photoAlt } = useSelector(selectAboutMe)
    return (
        <PortfolioSimpleContainer>
            <PortfolioPhoto
                style={{ flex: '1 1 33%' }}
                src={photoUrl}
                alt={photoAlt}
            />
            <Box sx={{ flex: '1 1 66%' }}>
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
        </PortfolioSimpleContainer >
    )
}

export default AboutMe
