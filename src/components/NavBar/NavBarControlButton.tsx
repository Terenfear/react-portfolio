import MenuIcon from '@mui/icons-material/Menu'
import { Fab, FabProps, Slide, useScrollTrigger } from '@mui/material'
import React from 'react'


const NavBarControlButton: React.FC<FabProps> = (props) => {
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
