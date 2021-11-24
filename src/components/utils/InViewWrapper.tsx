import React, { PropsWithChildren, useCallback, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { PropsOf } from '../../utils/emotionHelper'

export interface InViewWrapperProps extends PropsOf<'div'>{
    onInViewChange: (inView: boolean) => void
}
const InViewWrapper = React.forwardRef<HTMLDivElement, PropsWithChildren<InViewWrapperProps>>((props, ref) => {
    const { onInViewChange: onInViewChanged, children, ...otherProps } = props
    const [setInViewRef, inView] = useInView({ threshold: 0.5 })
    useEffect(() => onInViewChanged(inView), [onInViewChanged, inView])
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
