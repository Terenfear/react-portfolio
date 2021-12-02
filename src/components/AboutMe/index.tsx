import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { MultilineTextTypographiesList } from '../../utils/reactUtils'
import TextImagePortfolioItem from '../PortfolioItems/TextImagePortfolioItem'
import PortfolioPhoto from '../PortfolioPhoto'
import { selectAboutMe } from './aboutMeSlice'

const AboutMe: React.FC = () => {
    const { profession, details, photoUrl, photoAlt } = useSelector(selectAboutMe)
    return (
        <TextImagePortfolioItem
            startWithText={false}
            textAreaChildren={
                <>
                    <Typography variant='h2' mb={1}>About me</Typography>
                    <Typography variant='h3' mb={3}>{profession}</Typography>
                    <MultilineTextTypographiesList multilineText={details} variant='body1' paragraph />
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
