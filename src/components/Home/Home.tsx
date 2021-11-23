import React, { PropsWithChildren, useEffect, useMemo } from 'react'
import { Box, Button, styled, Typography, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import PortfolioItem, { SMALL_AREA, LARGE_AREA } from '../PortfolioItem/PortfolioItem'
import { MultilineTextTypographiesList } from '../Utils/MultilineTextTypographiesList'
import { selectHome } from './homeSlice'
import { useInView } from 'react-intersection-observer'

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
                [theme.breakpoints.isDesktopCSSMediaQuery]: {
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
                    [theme.breakpoints.isDesktopCSSMediaQuery]: {
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
                [theme.breakpoints.isDesktopCSSMediaQuery]: {
                    gridColumn: VIDEO_DESKTOP_COLUMNS,
                    clipPath: 'ellipse(farthest-side 130% at 100% 50%)'
                }
            }}>
                <HomeVideo videoUrl={videoUrl} />
            </Box>
        </PortfolioItem >
    )
}

const HomeVideo = React.memo(({ videoUrl }: { videoUrl: string }) => {
    const [setRef, inView, entry] = useInView({ threshold: 0.1 })
    useEffect(() => {
        const element = entry?.target
        if (element && element !== null) {
            setVideoState(element as HTMLVideoElement, inView)
        }
    }, [inView, entry])
    return (
        <StyledVideo ref={setRef} loop muted>
            <source src={videoUrl} type='video/mp4' />
            Your browser does not support the video tag
        </StyledVideo>
    )
})

const StyledVideo = styled('video')(({ theme }) => ({
    objectFit: 'cover',
    minWidth: 0,
    width: '100%',
    height: '100%',
    [theme.breakpoints.isDesktopCSSMediaQuery]: {
        objectPosition: '20%',
    }
}))

const setVideoState = (videoElement: HTMLVideoElement, isPlaying: boolean): void => {
    if (isPlaying) {
        videoElement.play()
    } else {
        videoElement.pause()
    }
}

const buttonSx = { flex: '1' } as const

const VIDEO_MOBILE_COLUMNS = '1 / -1'
const VIDEO_DESKTOP_COLUMNS = `${SMALL_AREA}-start / -1`

export default Home
