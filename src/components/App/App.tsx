import React, { useCallback, useState, useRef } from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Experience from '../Experience/Experience'
import HardSkills from '../HardSkills/HardSkills'
import SoftSkills from '../SoftSkills/SoftSkills'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import { useTheme, Box } from '@mui/material'
import NavBar from '../NavBar/NavBar'
import { NavBarItem } from '../NavBar/NavBarItem'
import InViewWrapper from '../utils/InViewWrapper'

const App = (): JSX.Element => {
    const theme = useTheme()

    const [visibleItem, setVisibleItem] = useState<NavBarItem>()

    const homeRef = useRef<HTMLDivElement>(null)
    const aboutMeRef = useRef<HTMLDivElement>(null)
    const hardSkillsRef = useRef<HTMLDivElement>(null)
    const experienceRef = useRef<HTMLDivElement>(null)
    const softSkillsRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)

    const onHomeClick = useCallback(() => smoothScrollIntoView(homeRef.current), [])
    const onAboutMeClick = useCallback(() => smoothScrollIntoView(aboutMeRef.current), [])
    const onHardSkillsClick = useCallback(() => smoothScrollIntoView(hardSkillsRef.current), [])
    const onExperienceClick = useCallback(() => smoothScrollIntoView(experienceRef.current), [])
    const onSoftSkillsClick = useCallback(() => smoothScrollIntoView(softSkillsRef.current), [])
    const onContactClick = useCallback(() => smoothScrollIntoView(contactRef.current), [])
    const onNavItemClick = useCallback(
        (navItem: NavBarItem) => {
            switch (navItem) {
                case (NavBarItem.Home):
                    onHomeClick()
                    break
                case (NavBarItem.AboutMe):
                    onAboutMeClick()
                    break
                case (NavBarItem.HardSkills):
                    onHardSkillsClick()
                    break
                case (NavBarItem.Experience):
                    onExperienceClick()
                    break
                case (NavBarItem.SoftSkills):
                    onSoftSkillsClick()
                    break
                case (NavBarItem.Contact):
                    onContactClick()
                    break
            }
        },
        [onAboutMeClick, onContactClick, onExperienceClick, onHardSkillsClick, onHomeClick, onSoftSkillsClick]
    )

    const onHomeInViewChange = useCallback(
        (inView: boolean) => { if (inView) setVisibleItem(NavBarItem.Home) },
        []
    )
    const onAboutMeInViewChange = useCallback(
        (inView: boolean) => { if (inView) setVisibleItem(NavBarItem.AboutMe) },
        []
    )
    const onHardSkillsInViewChange = useCallback(
        (inView: boolean) => { if (inView) setVisibleItem(NavBarItem.HardSkills) },
        []
    )
    const onSoftSkillsInViewChange = useCallback(
        (inView: boolean) => { if (inView) setVisibleItem(NavBarItem.SoftSkills) },
        []
    )
    const onExperienceInViewChange = useCallback(
        (inView: boolean) => { if (inView) setVisibleItem(NavBarItem.Experience) },
        []
    )
    const onContactInViewChange = useCallback(
        (inView: boolean) => { if (inView) setVisibleItem(NavBarItem.Contact) },
        []
    )

    return (
        <>
            <NavBar onItemClick={onNavItemClick}
                selectedItem={visibleItem} />
            <Box sx={{
                ['& > *:not(:first-child)']: {
                    py: 6
                },
                ['& > *:nth-child(odd)']: {
                    bgcolor: 'background.paper'
                }
            }}>
                <InViewWrapper
                    onInViewChange={onHomeInViewChange}
                    ref={homeRef}
                    style={{ minHeight: '100vh' }}>
                    <Home
                        onLearnMoreClick={onAboutMeClick}
                        onContactClicked={onContactClick} />
                </InViewWrapper>
                <InViewWrapper onInViewChange={onAboutMeInViewChange}
                    ref={aboutMeRef}>
                    <AboutMe />
                </InViewWrapper>
                <InViewWrapper onInViewChange={onHardSkillsInViewChange}
                    ref={hardSkillsRef}>
                    <HardSkills />
                </InViewWrapper>
                <InViewWrapper onInViewChange={onSoftSkillsInViewChange}
                    ref={softSkillsRef}>
                    <SoftSkills />
                </InViewWrapper>
                <InViewWrapper onInViewChange={onExperienceInViewChange}
                    ref={experienceRef}>
                    <Experience />
                </InViewWrapper>
                <InViewWrapper onInViewChange={onContactInViewChange}
                    ref={contactRef}>
                    <Contact />
                </InViewWrapper>
            </Box>
        </>
    )
}

const smoothScrollIntoView = (element: HTMLElement | null | undefined): unknown => {
    if (!element) return
    const options = getScrollOptions(element)
    return element.scrollIntoView(options)
}

const getScrollOptions = (target: HTMLElement): ScrollIntoViewOptions => {
    return {
        behavior: 'smooth',
        ...(target.clientHeight < window.innerHeight && {
            block: 'center',
            inline: 'center'
        })
    }
}

export default App
