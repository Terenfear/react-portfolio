import { AppBar, Slide, Toolbar, useScrollTrigger } from '@mui/material'
import React from 'react'
import GitHubButton from '../GitHubButton'
import InnerNavBar from './InnerNavBar'
import { NavBarProps } from './NavBar'

const DesktopNavBar = (props: NavBarProps): JSX.Element => {
    const scrolledDown = useScrollTrigger()
    return (
        <>
            <Slide appear={false} in={!scrolledDown}>
                <AppBar position='fixed'>
                    <Toolbar sx={{ gap: 3 }}>
                        <GitHubButton />
                        <InnerNavBar {...props}
                            direction='row'
                            shouldExpand={true} />
                    </Toolbar>
                </AppBar>
            </Slide>
        </>
    )
}

export default DesktopNavBar
