import React, { useCallback, useMemo, useState } from 'react'
import { AppBar, Box, Button, ButtonProps, Fab, FabProps, IconButton, IconButtonProps, Modal, Slide, Stack, styled, SwipeableDrawer, Toolbar, useScrollTrigger } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { NavBarItem, NavBarItemUtils } from './NavBarItem'
import { Property, Globals } from 'csstype'
import useIsDesktop from '../../utils/useIsDesktop'

export interface NavBarProps {
    onItemClick: (item: NavBarItem) => void,
    selectedItem?: NavBarItem
}

const NavBar = (props: NavBarProps): JSX.Element => {
    const isDesktop = useIsDesktop()
    return (
        isDesktop ?
            <DesktopNavBar {...props} /> :
            <MobileNavBar {...props} />
    )
}

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

const MobileNavBar = (props: NavBarProps): JSX.Element => {
    const [isOpen, setOpen] = useState<boolean>(false)
    const realOnItemClick = props.onItemClick
    const onItemClick: typeof realOnItemClick = useCallback(
        (item) => {
            realOnItemClick(item)
            setOpen(false)
        },
        [realOnItemClick]
    )
    return (
        <>
            <NavBarControlButton sx={{
                position: 'fixed',
                zIndex: 100,
                top: 20,
                left: 20
            }}
                onClick={() => setOpen(s => !s)}
            />
            <SwipeableDrawer anchor='left'
                open={isOpen}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                swipeAreaWidth={20}
                ModalProps={{ keepMounted: true }}
                PaperProps={{
                    sx: {
                        minWidth: '75vw',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 2
                    }
                }}>
                <InnerNavBar {...props}
                    onItemClick={onItemClick}
                    direction='column'
                    shouldExpand={false} />
            </SwipeableDrawer>
        </>
    )
}

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

export interface InnerNavBarProps extends NavBarProps {
    direction: Exclude<Property.FlexDirection, Globals>,
    shouldExpand: boolean
}

const InnerNavBar = (props: InnerNavBarProps): JSX.Element => {
    const { onItemClick, selectedItem, direction, shouldExpand } = props
    const nonImportantNavBarItems = useMemo(() =>
        NavBarItemUtils.asArray().filter(i => i !== NavBarItem.Contact), [])
    return (
        <Stack component='nav'
            direction={direction}
            gap={shouldExpand ? 2 : 6}
            flexGrow={shouldExpand ? 1 : 0}>
            <Stack direction={direction}
                sx={{
                    gap: 2,
                    minWidth: 0,
                    minHeight: 0,
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
                {nonImportantNavBarItems.map(value => {
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
        </Stack>
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
