/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, styled, Typography, useTheme } from '@mui/material'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSelector } from 'react-redux'
import { MultilineTextTypographiesList } from '../../utils/reactUtils'
import PortfolioItem, { LARGE_AREA, SMALL_AREA } from '../PortfolioItems/PortfolioItem'
import { selectHome } from './homeSlice'

export interface HomeProps {
    onLearnMoreClick: () => void,
    onContactClicked: () => void
}

const Home: React.FC<HomeProps> = ({ onLearnMoreClick, onContactClicked }) => {
    const theme = useTheme()
    const { title, subtitle, videoUrl, videoAlt } = useSelector(selectHome)

    return (
        <PortfolioItem disableVerticalPadding={true}>
            <Box sx={{
                gridArea: LARGE_AREA,
                pb: (t) => t.sizes.itemPaddingVertical,
                [theme.breakpoints.isDesktopCSSMediaQuery]: {
                    pt: (t) => t.sizes.itemPaddingVertical
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
                    <StyledButton variant='contained'
                        onClick={onLearnMoreClick}>
                        Learn More
                    </StyledButton>
                    <StyledButton variant='outlined'
                        onClick={onContactClicked}>
                        Contact Me
                    </StyledButton>
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
                <HomeVideo videoUrl={videoUrl}
                    videoAlt={videoAlt} />
            </Box>
        </PortfolioItem >
    )
}

type HomeVideoProps = {
    videoUrl: string
    videoAlt: string
}
const HomeVideo = React.memo(({ videoUrl, videoAlt }: HomeVideoProps) => {
    const [setRef, inView, entry] = useInView({ threshold: 0.1 })
    useEffect(() => {
        const element = entry?.target
        if (element && element !== null) {
            setVideoState(element as HTMLVideoElement, inView)
        }
    }, [inView, entry])
    return (
        <StyledVideo ref={setRef}
            aria-label={videoAlt}
            loop muted>
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

const StyledButton = styled(Button)({
    flexGrow: 1
})

const setVideoState = (videoElement: HTMLVideoElement, isPlaying: boolean): void => {
    if (isPlaying) {
        videoElement.play()
    } else {
        videoElement.pause()
    }
}

const VIDEO_MOBILE_COLUMNS = '1 / -1'
const VIDEO_DESKTOP_COLUMNS = `${SMALL_AREA}-start / -1`

export default Home
