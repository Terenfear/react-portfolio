import { Box } from '@mui/system'
import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Experience from '../Experience/Experience'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import HardSkills from '../HardSkills/HardSkills'
import SoftSkills from '../SoftSkills/SoftSkills'
import Contact from '../Contact/Contact'

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
                <Contact />
            </PortfolioItem>
            <PortfolioItem>
                <SoftSkills />
            </PortfolioItem>
            <PortfolioItem>
                <AboutMe />
            </PortfolioItem>
            <PortfolioItem>
                <HardSkills />
            </PortfolioItem>
            <PortfolioItem>
                <Experience />
            </PortfolioItem>
        </Box>
    )
}

export default App
