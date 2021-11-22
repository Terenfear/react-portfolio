/* eslint-disable react/jsx-key */
import { Box, Typography, useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import PortfolioItem, { SMALL_AREA, LARGE_AREA } from '../PortfolioItem/PortfolioItem'
import { MultilineTextTypographiesList } from '../Utils/MultilineTextTypographiesList'
import { selectHome } from './homeSlice'

const Home = (): JSX.Element => {
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
                <Typography variant='h1' mb={1}>{title}</Typography>
                <MultilineTextTypographiesList multilineText={subtitle}
                    variant='body1'
                    paragraph />
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
                <video style={{
                    objectFit: 'cover',
                    minWidth: 0,
                    width: '100%',
                    height: '100%'
                }}
                    loop muted autoPlay>
                    <source src={videoUrl} type='video/mp4' />
                    Your browser does not support the video tag
                </video>
            </Box>
        </PortfolioItem >
    )
}

const VIDEO_MOBILE_COLUMNS = '1 / -1'
const VIDEO_DESKTOP_COLUMNS = `${SMALL_AREA}-start / -1`

export default Home
