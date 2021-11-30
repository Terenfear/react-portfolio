import { createRef, useMemo } from 'react'
import { NavBarItem, NavBarItemUtils } from '../NavBar/NavBarItem'

export const useNavRefsMap = (): Record<NavBarItem, React.RefObject<HTMLDivElement>> =>
    useMemo(
        () => {
            return NavBarItemUtils.asArray()
                .map(item => ({ item, ref: createRef<HTMLDivElement>() }))
                .reduce((obj, pair) => {
                    obj[pair.item] = pair.ref
                    return obj
                }, {} as Record<NavBarItem, React.RefObject<HTMLDivElement>>)
        },
        []
    )

