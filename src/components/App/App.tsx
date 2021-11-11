import { Box } from '@mui/system'
import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Experience from '../Experience/Experience'
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
                <Experience />
            </PortfolioItem>
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
