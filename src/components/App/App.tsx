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

    const getIsDesktop = useCallback(
        () => window.matchMedia(theme.breakpoints.isDesktopMediaQuery).matches,
        [theme]
    )
    const onLearnMoreClick = useCallback(
        () => smoothScrollIntoView(aboutMeRef.current, getIsDesktop),
        [getIsDesktop]
    )
    const onContactClick = useCallback(
        () => smoothScrollIntoView(contactRef.current, getIsDesktop),
        [getIsDesktop]
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
    getIsDesktop: () => boolean
): unknown =>
    element?.scrollIntoView(getScrollOptions(getIsDesktop))

const getScrollOptions = (getIsDesktop: () => boolean): ScrollIntoViewOptions => {
    if (getIsDesktop()) {
        return { behavior: 'smooth', block: 'center', inline: 'center' }
    } else {
        return { behavior: 'smooth' }
    }
}

export default App
