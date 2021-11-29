import React, { useCallback, useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import { NavBarItem } from '../NavBar/NavBarItem'
import { useDispatch, useSelector } from 'react-redux'
import { appStarted, selectIsLoading } from './appSlice'
import AppLoading from './AppLoading'
import { AppDispatch } from '../../store'
import { useNavRefsMap } from './hooks'
import AppBody from './AppBody'

const App = (): JSX.Element => {
    const isAppLoading = useSelector(selectIsLoading)
    const [visibleItem, setVisibleItem] = useState<NavBarItem>()
    const navRefsMap = useNavRefsMap()
    const onNavItemClick = useCallback(
        (navItem: NavBarItem) => smoothScrollIntoView(navRefsMap[navItem].current),
        [navRefsMap]
    )
    const onLearnMoreClick = useCallback(
        () => smoothScrollIntoView(navRefsMap[NavBarItem.AboutMe].current),
        [navRefsMap]
    )
    const onContactMeClick = useCallback(
        () => smoothScrollIntoView(navRefsMap[NavBarItem.Contact].current),
        [navRefsMap]
    )

    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => { dispatch(appStarted()) }, [dispatch])

    return isAppLoading ?
        <AppLoading /> :
        <>
            <NavBar onItemClick={onNavItemClick}
                selectedItem={visibleItem} />
            <MemoizedAppBody navRefsMap={navRefsMap}
                onInViewItemChange={setVisibleItem}
                onLearnMoreClick={onLearnMoreClick}
                onContactClicked={onContactMeClick} />
        </>
}

const MemoizedAppBody = React.memo(AppBody)

const smoothScrollIntoView = (element: HTMLElement | null | undefined): unknown => {
    if (!element) return
    const options = getScrollOptions(element)
    return element.scrollIntoView(options)
}

const getScrollOptions = (target: HTMLElement): ScrollIntoViewOptions => {
    return {
        behavior: 'smooth',
        ...(target.clientHeight < window.innerHeight && {
            block: 'center',
            inline: 'center'
        })
    }
}

export default App
