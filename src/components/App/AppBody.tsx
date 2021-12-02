import { Box } from '@mui/material'
import { styled } from '@mui/system'
import React, { useMemo } from 'react'
import AboutMe from '../AboutMe'
import Contact from '../Contact'
import Credits from '../Credits'
import Experience from '../Experience'
import HardSkills from '../HardSkills'
import Home from '../Home'
import { NavBarItem } from '../NavBar/NavBarItem'
import SoftSkills from '../SoftSkills'
import InViewWrapper from './InViewWrapper'

export interface AppBodyProps {
    navRefsMap: Record<NavBarItem, React.RefObject<HTMLDivElement>>,
    onInViewItemChange: (item: NavBarItem, inView: boolean) => void,
    onLearnMoreClick: () => void,
    onContactClicked: () => void
}

const AppBody: React.FC<AppBodyProps> = (
    { navRefsMap, onInViewItemChange, onLearnMoreClick, onContactClicked }
) => {
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
        <Box component='main'
            sx={{
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
