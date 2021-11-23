import React, { useCallback, useRef } from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Experience from '../Experience/Experience'
import HardSkills from '../HardSkills/HardSkills'
import SoftSkills from '../SoftSkills/SoftSkills'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import { useTheme, Box } from '@mui/material'

const App = (): JSX.Element => {
    const theme = useTheme()

    const homeRef = useRef<HTMLDivElement>(null)
    const aboutMeRef = useRef<HTMLDivElement>(null)
    const hardSkillsRef = useRef<HTMLDivElement>(null)
    const experienceRef = useRef<HTMLDivElement>(null)
    const softSkillsRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)

    const getIsMobile = useCallback(
        () => window.matchMedia(theme.breakpoints.isDesktopMediaQuery).matches,
        [theme]
    )
    const onLearnMoreClick = useCallback(
        () => smoothScrollIntoView(aboutMeRef.current, getIsMobile),
        [getIsMobile]
    )
    const onContactClick = useCallback(
        () => smoothScrollIntoView(contactRef.current, getIsMobile),
        [getIsMobile]
    )

    return (
        <Box sx={{
            ['& > *:not(:first-child)']: {
                py: 6
            },
            ['& > *:nth-child(odd)']: {
                bgcolor: 'background.paper'
            }
        }}>
            <div ref={homeRef}
                style={{ minHeight: '100vh' }}>
                <Home
                    onLearnMoreClick={onLearnMoreClick}
                    onContactClicked={onContactClick} />
            </div>
            <div ref={aboutMeRef}><AboutMe /></div>
            <div ref={hardSkillsRef}><HardSkills /></div>
            <div ref={experienceRef}><Experience /></div>
            <div ref={softSkillsRef}><SoftSkills /></div>
            <div ref={contactRef}><Contact /></div>
        </Box>
    )
}

const smoothScrollIntoView = (
    element: HTMLElement | null | undefined,
    getIsMobile: () => boolean
): unknown =>
    element?.scrollIntoView(getScrollOptions(getIsMobile))

const getScrollOptions = (getIsMobile: () => boolean): ScrollIntoViewOptions => {
    if (getIsMobile()) {
        return { behavior: 'smooth' }
    } else {
        return { behavior: 'smooth', block: 'center', inline: 'center' }
    }
}

export default App
