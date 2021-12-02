import React from 'react'
import useIsDesktop from '../../utils/useIsDesktop'
import DesktopNavBar from './DesktopNavBar'
import MobileNavBar from './MobileNavBar'
import { NavBarItem } from './NavBarItem'

export interface NavBarProps {
    onItemClick: (item: NavBarItem) => void,
    selectedItem?: NavBarItem
}

const NavBar: React.FC<NavBarProps> = (props) => {
    const isDesktop = useIsDesktop()
    return isDesktop ?
        <DesktopNavBar {...props} /> :
        <MobileNavBar {...props} />

}

export default NavBar
