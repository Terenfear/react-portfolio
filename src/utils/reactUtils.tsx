import { Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { PropsOf } from './emotionHelper'
import { hashString } from 'react-hash-string'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const createMultilineTextComponentList = <C extends AnyJSXElementConstructor>(Component: C) => {
    const MultilineTextComponentList: React.FC<PropsOf<C> & MultilineTextComponentListProps> =
        (props) => {
            const { multilineText, keySelector = hashString } = props as MultilineTextComponentListProps
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { multilineText: ignore1, keySelector: ignore2, ...cleanProps } = props // get rid of our props
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
                        <Component {...cleanProps as PropsOf<C>}
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
