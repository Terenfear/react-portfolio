import { useCallback, useRef } from 'react'
import { NavBarItem } from '../NavBar/NavBarItem'

/**
 * This type uses a type parameter to enforce type checks in `useAllNavItemAux()`
 */
export type GenericAuxNavObject<I extends NavBarItem> = {
    readonly item: I, // used to force type checks
    readonly sectionRef: React.Ref<HTMLDivElement>,
    readonly onNavButtonClick: () => void,
    readonly onSectionInViewChange: (inView: boolean) => void
}
export type AuxNavObject = Omit<GenericAuxNavObject<NavBarItem>, 'item'>
type NavItemsToGenericAuxObjects = {
    readonly [P in NavBarItem]: GenericAuxNavObject<P>
}
export type NavItemsToAuxObjects = {
    readonly [P in keyof NavItemsToGenericAuxObjects]: AuxNavObject
}

const useAuxNavObject = <I extends NavBarItem>(
    item: I,
    onScrollToElementRequest: (element: HTMLElement | null | undefined) => void,
    onVisibleItemChange: (newItem: I) => void
): GenericAuxNavObject<I> => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const onNavButtonClick = useCallback(
        () => onScrollToElementRequest(sectionRef.current),
        [onScrollToElementRequest]
    )
    const onSectionInViewChange = useCallback(
        (inView: boolean) => { if (inView) onVisibleItemChange(item) },
        [item, onVisibleItemChange]
    )
    return ({
        item,
        sectionRef,
        onNavButtonClick,
        onSectionInViewChange
    })
}

export const useAllNavItemAux = (
    onScrollToElementRequest: (element: HTMLElement | null | undefined) => void,
    onVisibleItemChange: (newItem: NavBarItem) => void
): NavItemsToAuxObjects => {
    const foo: NavItemsToGenericAuxObjects = {
        [NavBarItem.Home]: useAuxNavObject(NavBarItem.Home, onScrollToElementRequest, onVisibleItemChange),
        [NavBarItem.AboutMe]: useAuxNavObject(NavBarItem.AboutMe, onScrollToElementRequest, onVisibleItemChange),
        [NavBarItem.HardSkills]: useAuxNavObject(NavBarItem.HardSkills, onScrollToElementRequest, onVisibleItemChange),
        [NavBarItem.SoftSkills]: useAuxNavObject(NavBarItem.SoftSkills, onScrollToElementRequest, onVisibleItemChange),
        [NavBarItem.Experience]: useAuxNavObject(NavBarItem.Experience, onScrollToElementRequest, onVisibleItemChange),
        [NavBarItem.Contact]: useAuxNavObject(NavBarItem.Contact, onScrollToElementRequest, onVisibleItemChange)
    }
    return foo as NavItemsToAuxObjects
}
