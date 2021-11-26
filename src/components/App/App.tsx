import React, { useCallback, useState, useRef, PropsWithChildren, HTMLAttributes, HTMLProps, useEffect } from 'react'
import AboutMe from '../AboutMe/AboutMe'
import Experience from '../Experience/Experience'
import HardSkills from '../HardSkills/HardSkills'
import SoftSkills from '../SoftSkills/SoftSkills'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import { Box } from '@mui/material'
import NavBar from '../NavBar/NavBar'
import { NavBarItem } from '../NavBar/NavBarItem'
import { useDispatch, useSelector } from 'react-redux'
import { appStarted, selectIsLoading } from './appSlice'
import { useAllNavItemAux } from './useAuxNavObject'
import NavInViewWrapper from './NavInViewWrapper'
import AppLoading from './AppLoading'
import { AppDispatch } from '../../store'

const App = (): JSX.Element => {
    const isAppLoading = useSelector(selectIsLoading)
    const [visibleItem, setVisibleItem] = useState<NavBarItem>()
    const navItemsToAuxObjs = useAllNavItemAux(smoothScrollIntoView, setVisibleItem)

    const onNavItemClick = useCallback(
        (navItem: NavBarItem) => navItemsToAuxObjs[navItem].onNavButtonClick(),
        [navItemsToAuxObjs]
    )

    const homeAuxObj = navItemsToAuxObjs[NavBarItem.Home]
    const aboutMeAuxObj = navItemsToAuxObjs[NavBarItem.AboutMe]
    const hardSkillsAuxObj = navItemsToAuxObjs[NavBarItem.HardSkills]
    const softSkillsAuxObj = navItemsToAuxObjs[NavBarItem.SoftSkills]
    const experienceAuxObj = navItemsToAuxObjs[NavBarItem.Experience]
    const contactAuxObj = navItemsToAuxObjs[NavBarItem.Contact]

    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => { dispatch(appStarted()) }, [dispatch])

    return isAppLoading ?
        <AppLoading /> :
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
                <NavInViewWrapper
                    auxNavObj={homeAuxObj}
                    style={{ minHeight: '100vh' }}>
                    <Home
                        onLearnMoreClick={aboutMeAuxObj.onNavButtonClick}
                        onContactClicked={contactAuxObj.onNavButtonClick} />
                </NavInViewWrapper>
                <NavInViewWrapper auxNavObj={aboutMeAuxObj}>
                    <AboutMe />
                </NavInViewWrapper>
                <NavInViewWrapper auxNavObj={hardSkillsAuxObj}>
                    <HardSkills />
                </NavInViewWrapper>
                <NavInViewWrapper auxNavObj={softSkillsAuxObj}>
                    <SoftSkills />
                </NavInViewWrapper>
                <NavInViewWrapper auxNavObj={experienceAuxObj}>
                    <Experience />
                </NavInViewWrapper>
                <NavInViewWrapper auxNavObj={contactAuxObj}>
                    <Contact />
                </NavInViewWrapper>
            </Box>
        </>
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
