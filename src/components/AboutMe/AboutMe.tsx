/* eslint-disable react/jsx-key */
import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import TextImagePortfolioItem from '../PortfolioItem/TextImagePortfolioItem'
import PortfolioPhoto from '../PortfolioPhoto/PortfolioPhoto'
import { selectAboutMe } from './aboutMeSlice'

const AboutMe = (): JSX.Element => {
    const { profession, details, photoUrl, photoAlt } = useSelector(selectAboutMe)
    return (
        <TextImagePortfolioItem
            startWithText={false}
            textAreaChildren={
                <>
                    <Typography variant='h2' mb={1}>About me</Typography>
                    <Typography variant='h3' mb={3}>{profession}</Typography>
                    {
                        details.split('\n')
                            .filter(t => t.length > 0)
                            .map(chunkOfText => (
                                <Typography variant='body1' paragraph>{chunkOfText}</Typography>
                            ))
                    }
                </>
            }
            imageAreaChildren={
                <PortfolioPhoto
                    src={photoUrl}
                    alt={photoAlt}
                />
            }
        />
    )
}

export default AboutMe
