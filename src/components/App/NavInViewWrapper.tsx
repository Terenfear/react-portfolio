import React, { HTMLAttributes, PropsWithChildren } from 'react'
import InViewWrapper from '../utils/InViewWrapper'
import { AuxNavObject } from './useAuxNavObject'

export interface NavInViewWrapperProps extends HTMLAttributes<unknown> {
    auxNavObj: AuxNavObject
}
const NavInViewWrapper = (props: PropsWithChildren<NavInViewWrapperProps>): JSX.Element => {
    const { auxNavObj, children, ...otherProps } = props
    return (<InViewWrapper onInViewChange={auxNavObj.onSectionInViewChange}
        ref={auxNavObj.sectionRef}
        {...otherProps}>
        {children}
    </InViewWrapper>)
}

export default NavInViewWrapper
