import { Box } from '@mui/system'
import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import Skills from '../Skills/Skills'

const App = (): JSX.Element => {
    return (
        <Box sx={{
            ['& > *']: {
                py: 6
            },
            ['& > *:nth-child(odd)']: {
                bgcolor: 'background.paper'
            }
        }}>
            <PortfolioItem>
                <AboutMe />
            </PortfolioItem>
            <PortfolioItem>
                <Skills />
            </PortfolioItem>
        </Box>
    )
}

export default App
