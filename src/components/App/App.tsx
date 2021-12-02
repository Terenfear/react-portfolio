import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../store'
import NavBar from '../NavBar'
import { NavBarItem } from '../NavBar/NavBarItem'
import AppBody from './AppBody'
import AppLoading from './AppLoading'
import { appStarted, selectIsLoading } from './appSlice'
import { useNavRefsMap } from './hooks'

const App: React.FC = () => {
    const isAppLoading = useSelector(selectIsLoading)
    const [visibleItemSet, setVisibleItemSet] = useState<Set<NavBarItem>>(new Set())
    const updateVisibleItemSet = useCallback(
        (item: NavBarItem, inView: boolean) =>
            setVisibleItemSet(currentSet => {
                const newSet = new Set(currentSet)
                if (inView) {
                    newSet.add(item)
                } else {
                    newSet.delete(item)
                }
                return newSet
            }),
        []
    )
    // The last added visible item is considered main.
    const mainVisibleItem = useMemo(() => last(visibleItemSet.values()), [visibleItemSet])
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
            <MemoizedNavBar onItemClick={onNavItemClick}
                selectedItem={mainVisibleItem} />
            <MemoizedAppBody navRefsMap={navRefsMap}
                onInViewItemChange={updateVisibleItemSet}
                onLearnMoreClick={onLearnMoreClick}
                onContactClicked={onContactMeClick} />
        </>
}

const MemoizedAppBody = React.memo(AppBody)
const MemoizedNavBar = React.memo(NavBar)

const smoothScrollIntoView = (element: HTMLElement | null | undefined): void => {
    if (!element) return
    const options = getScrollOptions(element)
    element.scrollIntoView(options)
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

function last<T>(iterator: Iterator<T>): T | undefined {
    let result = iterator.next()
    let value
    while (!result.done) {
        value = result.value
        result = iterator.next()
    }
    return value
}

export default App
