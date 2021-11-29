import React, { PropsWithChildren, useCallback, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { PropsOf } from '../../utils/emotionHelper'
import { NavBarItem } from '../NavBar/NavBarItem'

export interface InViewWrapperProps extends PropsOf<'div'> {
    navBarItem: NavBarItem,
    onInViewItemChange: (itemInView: NavBarItem) => void
}
const InViewWrapper = React.forwardRef<HTMLDivElement, PropsWithChildren<InViewWrapperProps>>((props, ref) => {
    const { navBarItem, onInViewItemChange, children, ...otherProps } = props
    const [setInViewRef, inView] = useInView({ threshold: 0.5 })
    useEffect(
        () => { if (inView) onInViewItemChange(navBarItem) },
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
