import React from 'react'
import { Box, Button, styled, Theme, Typography, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import PortfolioItem, { SMALL_AREA, LARGE_AREA } from '../PortfolioItem/PortfolioItem'
import { MultilineTextTypographiesList } from '../Utils/MultilineTextTypographiesList'
import { selectHome } from './homeSlice'

export interface HomeProps {
    onLearnMoreClick: () => void,
    onContactClicked: () => void
}

const Home = ({ onLearnMoreClick, onContactClicked }: HomeProps): JSX.Element => {
    const theme = useTheme()
    const { title, subtitle, videoUrl } = useSelector(selectHome)
    return (
        <PortfolioItem>
            <Box sx={{
                gridArea: LARGE_AREA,
                pb: 6,
                [theme.breakpoints.up('md')]: {
                    pt: 6
                }
            }}>
                <Typography variant='h1' mb={5}>{title}</Typography>
                <MultilineTextTypographiesList multilineText={subtitle}
                    variant='body1'
                    paragraph />
                <Box sx={{
                    display: 'flex',
                    gap: 3,
                    mt: 4,
                    justifyContent: 'space-between',
                    [theme.breakpoints.up('md')]: {
                        display: 'inline-flex'
                    }
                }}>
                    <Button sx={buttonSx}
                        variant='contained'
                        onClick={onLearnMoreClick}>
                        Learn More
                    </Button>
                    <Button sx={buttonSx}
                        variant='outlined'
                        onClick={onContactClicked}>
                        Contact
                    </Button>
                </Box>
            </Box>
            <Box sx={{
                gridColumn: VIDEO_MOBILE_COLUMNS,
                width: '100%',
                height: '100%',
                clipPath: 'circle(farthest-side at 50% -150%)',
                [theme.breakpoints.up('md')]: {
                    gridColumn: VIDEO_DESKTOP_COLUMNS,
                    clipPath: 'ellipse(farthest-side 130% at 100% 50%)'
                }
            }}>
                <HomeVideo loop muted autoPlay>
                    <source src={videoUrl} type='video/mp4' />
                    Your browser does not support the video tag
                </HomeVideo>
            </Box>
        </PortfolioItem >
    )
}

const HomeVideo = styled('video')(({ theme }) => ({
    objectFit: 'cover',
    minWidth: 0,
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('md')]: {
        objectPosition: '20%',
    }
}))

const buttonSx = { flex: '1' } as const

const VIDEO_MOBILE_COLUMNS = '1 / -1'
const VIDEO_DESKTOP_COLUMNS = `${SMALL_AREA}-start / -1`

export default Home
