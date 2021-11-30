import React, { PropsWithChildren, useCallback, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { PropsOf } from '../../utils/emotionHelper'
import { NavBarItem } from '../NavBar/NavBarItem'

export interface InViewWrapperProps extends PropsOf<'div'> {
    navBarItem: NavBarItem,
    onInViewItemChange: (item: NavBarItem, inView: boolean) => void
}
const InViewWrapper = React.forwardRef<HTMLDivElement, PropsWithChildren<InViewWrapperProps>>((props, ref) => {
    const { navBarItem, onInViewItemChange, children, ...otherProps } = props
    // Watch a tiny horizontal line in the middle of the viewport. A child is
    // considered 'in view' if it intersects with this line. Even though the
    // line is quite small, it's possible to have multiple items being in view
    // simultaneously.
    const [setInViewRef, inView] = useInView({ rootMargin: '-49% 0px' })
    useEffect(
        () => { onInViewItemChange(navBarItem, inView) },
        [navBarItem, onInViewItemChange, inView]
    )
    const setCombinedRef = useCallback(
        (node: HTMLDivElement | null) => {
            if (typeof ref === 'function') {
                ref(node)
            } else if (ref !== null) {
                ref.current = node
            }
            setInViewRef(node)
        },
        [setInViewRef, ref]
    )
    return <div {...otherProps} ref={setCombinedRef}>{children}</div>
})

export default InViewWrapper
