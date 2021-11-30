import { Box } from '@mui/material'
import React, { useMemo } from 'react'
import Home from '../Home/Home'
import AboutMe from '../AboutMe/AboutMe'
import HardSkills from '../HardSkills/HardSkills'
import SoftSkills from '../SoftSkills/SoftSkills'
import Experience from '../Experience/Experience'
import Contact from '../Contact/Contact'
import { NavBarItem } from '../NavBar/NavBarItem'
import InViewWrapper from './InViewWrapper'
import { styled } from '@mui/system'
import Credits from '../Credits'

export interface AppBodyProps {
    navRefsMap: Record<NavBarItem, React.RefObject<HTMLDivElement>>,
    onInViewItemChange: (item: NavBarItem, inView: boolean) => void,
    onLearnMoreClick: () => void,
    onContactClicked: () => void
}

const AppBody = (props: AppBodyProps): JSX.Element => {
    const { navRefsMap, onInViewItemChange, onLearnMoreClick, onContactClicked } = props
    const navBarItemToComponent: Record<NavBarItem, JSX.Element> = useMemo(
        () => ({
            [NavBarItem.Home]: (
                <FullScreenDiv>
                    <Home
                        onLearnMoreClick={onLearnMoreClick}
                        onContactClicked={onContactClicked} />
                </FullScreenDiv>
            ),
            [NavBarItem.AboutMe]: (<AboutMe />),
            [NavBarItem.HardSkills]: (<HardSkills />),
            [NavBarItem.SoftSkills]: (<SoftSkills />),
            [NavBarItem.Experience]: (<Experience />),
            [NavBarItem.Contact]: (<Contact />),
        }),
        [onLearnMoreClick, onContactClicked]
    )
    return (
        <Box sx={{
            ['& > *:nth-child(odd)']: {
                bgcolor: 'background.paper'
            }
        }}>
            {
                Object.entries(navBarItemToComponent)
                    .map(([item, component]) => {
                        const castedItem = item as NavBarItem
                        return (
                            <InViewWrapper
                                key={castedItem}
                                ref={navRefsMap[castedItem]}
                                navBarItem={castedItem}
                                onInViewItemChange={onInViewItemChange}>
                                {component}
                            </InViewWrapper>
                        )
                    })
            }
            <Credits />
        </Box>
    )
}

const FullScreenDiv = styled('div')({
    minHeight: '100vh'
})



export default AppBody
