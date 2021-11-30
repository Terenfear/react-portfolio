import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Fab, FabProps, Slide, useScrollTrigger } from '@mui/material'


const NavBarControlButton = (props: FabProps): JSX.Element => {
    const scrolledDown = useScrollTrigger()
    return (
        <Slide in={!scrolledDown}>
            <Fab {...props}
                color='primary'
                aria-label='menu'>
                <MenuIcon />
            </Fab>
        </Slide>
    )
}

export default NavBarControlButton
