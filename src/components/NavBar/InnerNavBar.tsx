import React, { useMemo } from 'react'
import { Button, ButtonProps, Stack, styled } from '@mui/material'
import { NavBarItem, NavBarItemUtils } from './NavBarItem'
import { Globals, Property } from 'csstype'
import { NavBarProps } from './NavBar'

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

export default InnerNavBar
