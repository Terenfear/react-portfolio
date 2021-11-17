import { Box } from '@mui/system'
import React from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Experience from '../Experience/Experience'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import HardSkills from '../HardSkills/HardSkills'
import SoftSkills from '../SoftSkills/SoftSkills'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'

const App = (): JSX.Element => {
    return (
        <Box sx={{
            ['& > *:not(:first-child)']: {
                py: 6
            },
            ['& > *:nth-child(odd)']: {
                bgcolor: 'background.paper'
            }
        }}>
            <Home />
            <AboutMe />
            <HardSkills />
            <Experience />
            <SoftSkills />
            <Contact />
        </Box>
    )
}

export default App
