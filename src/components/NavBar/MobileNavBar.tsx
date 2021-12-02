import { SwipeableDrawer } from '@mui/material'
import React, { useCallback, useState } from 'react'
import { NavBarProps } from '.'
import GitHubButton from '../GitHubButton'
import InnerNavBar from './InnerNavBar'
import NavBarControlButton from './NavBarControlButton'

type DrawerState = {
    isOpen: boolean,
    isRefocusEnabled: boolean
}
const MobileNavBar: React.FC<NavBarProps> = (props) => {
    const [drawerState, setDrawerState] = useState<DrawerState>({ isOpen: false, isRefocusEnabled: true })
    const realOnItemClick = props.onItemClick
    const onItemClick: typeof realOnItemClick = useCallback(
        (item) => {
            realOnItemClick(item)
            // we disable refocusing because it interferes with scrolling
            setDrawerState({ isOpen: false, isRefocusEnabled: false })
        },
        [realOnItemClick]
    )
    const onManualOpen = useCallback(
        () => setDrawerState({ isOpen: true, isRefocusEnabled: true }), []
    )
    const onManualClose = useCallback(
        () => setDrawerState({ isOpen: false, isRefocusEnabled: true }), []
    )
    return (
        <>
            <NavBarControlButton sx={{
                position: 'fixed',
                zIndex: 10,
                top: 20,
                left: 20
            }}
                onClick={onManualOpen}
            />

            <SwipeableDrawer anchor='left'
                open={drawerState.isOpen}
                onOpen={onManualOpen}
                onClose={onManualClose}
                swipeAreaWidth={20}
                ModalProps={{
                    keepMounted: true,
                    disableRestoreFocus: drawerState.isRefocusEnabled
                }}
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
                <div style={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20
                }}>
                    <GitHubButton />
                </div>
                <InnerNavBar {...props}
                    onItemClick={onItemClick}
                    direction='column'
                    shouldExpand={false} />
            </SwipeableDrawer>

        </>
    )
}



export default MobileNavBar
