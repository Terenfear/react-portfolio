import React from 'react'
import { AppBar, Slide, styled, Toolbar, useScrollTrigger } from '@mui/material'
import InnerNavBar from './InnerNavBar'
import { NavBarProps } from './NavBar'

const DesktopNavBar = (props: NavBarProps): JSX.Element => {
    const scrolledDown = useScrollTrigger()
    return (
        <>
            <Slide appear={false} in={!scrolledDown}>
                <AppBar position='fixed'>
                    <Toolbar>
                        <InnerNavBar {...props}
                            direction='row'
                            shouldExpand={true} />
                    </Toolbar>
                </AppBar>
            </Slide>
            <ToolbarOffset />
        </>
    )
}

const ToolbarOffset = styled('div')(({ theme }) => theme.mixins.toolbar)

export default DesktopNavBar
