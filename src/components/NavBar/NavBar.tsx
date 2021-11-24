import React, { useMemo } from 'react'
import { AppBar, Button, ButtonProps, Slide, Stack, styled, Toolbar, useScrollTrigger } from '@mui/material'
import { NavBarItem, NavBarItemUtils } from './NavBarItem'

export interface NavBarProps {
    onItemClick: (item: NavBarItem) => void,
    selectedItem?: NavBarItem
}

const NavBar = ({ onItemClick, selectedItem }: NavBarProps): JSX.Element => {
    const scrolledDown = useScrollTrigger()
    const plainNavBarItems = useMemo(() =>
        NavBarItemUtils.asArray().filter(i => i !== NavBarItem.Contact), [])
    return (
        <>
            <Slide appear={false} in={!scrolledDown}>
                <AppBar position='fixed'>
                    <Toolbar component='nav' sx={{ gap: 2 }}>
                        <Stack direction='row'
                            sx={{
                                gap: 2,
                                minWidth: 0,
                                flexGrow: 1,
                                overflow: 'overlay',
                                // TODO(Nov 24, 2021): use mask if overflow is visible (check out https://github.com/amorriscode/use-overflow)
                                // mask: 'linear-gradient(90deg, transparent, #000 2%, #000 98%, transparent)',
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                                ['&::-webkit-scrollbar']: {
                                    display: 'none'
                                }
                            }}>
                            {plainNavBarItems.map(value => {
                                return <NavButton selected={value === selectedItem}
                                    key={value}
                                    onClick={() => onItemClick(value)}>
                                    {value}
                                </NavButton>
                            })}
                        </Stack>
                        <NavButton selected={NavBarItem.Contact === selectedItem}
                            key={NavBarItem.Contact}
                            variant='contained'
                            onClick={() => onItemClick(NavBarItem.Contact)}>
                            {NavBarItem.Contact}
                        </NavButton>
                    </Toolbar>
                </AppBar>
            </Slide>
            <ToolbarOffset />
        </>
    )
}

const StyledButton = styled(Button)({
    whiteSpace: 'nowrap',
    transition: 'color 300ms',
    flexShrink: 0
})

const NavButton = (props: ButtonProps & { selected: boolean }): JSX.Element => (
    <StyledButton variant='text'
        {...props}
        sx={
            props.selected ?
                { ...props.sx, color: 'common.white' } :
                props.sx
        } />
)

const ToolbarOffset = styled('div')(({ theme }) => theme.mixins.toolbar)

export default NavBar
