import { Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { PropsOf } from './emotionHelper'
import { hashCode } from './hashUtils'

export type AnyJSXElementConstructor<P = any> = keyof JSX.IntrinsicElements | React.JSXElementConstructor<P>

type MultilineTextComponentListProps = {
    multilineText: string,
    keySelector?: (textLine: string) => number
}

/**
 * Creates a React Fragment which contains a component for every line of text
 * from the `multilineText` attribute.
 * @param Component component to use for each line
 * @returns a new component that is essentially a `React.Fragment`. Will accept
 * the same attribute as the parameter `Component`
 */
export const createMultilineTextComponentList = <C extends AnyJSXElementConstructor>(Component: C) => {
    const MultilineTextComponentList = (props: PropsOf<C> & MultilineTextComponentListProps): JSX.Element | null => {
        const { multilineText, keySelector = hashCode } = props as MultilineTextComponentListProps
        const { multilineText: ignore1, keySelector: ignore2,...clearProps} = props // get rid of our props
        const textLines = useMemo(() => multilineText.split('\n'), [multilineText])
        const linesToKeys = useMemo(
            () => textLines.map(line => [line, keySelector(line)] as const),
            [textLines, keySelector]
        )
        if (multilineText.length === 0) {
            return null
        }
        return (
            <>
                {linesToKeys.map(lineKeyPair => (
                    <Component {...clearProps as PropsOf<C>}
                        key={lineKeyPair[1]}>
                        {lineKeyPair[0]}
                    </Component>
                ))}
            </>
        )
    }
    return MultilineTextComponentList
}
export const MultilineTextTypographiesList = createMultilineTextComponentList(Typography)

export const getDisplayName = (component: { displayName?: string, name?: string }): string =>
    component?.displayName?.toString() ?? component?.name?.toString() ?? 'Component'

export const calculateFlexBasisExpr = (columnCount: number, gapPx: number): string =>
    `calc(calc(100% - ${gapPx * (columnCount - 1)}px) / ${columnCount})`
