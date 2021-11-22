import React, { useMemo } from 'react'
import { PropsOf } from './emotionHelper'
import { hashCode } from './hashUtils'

type AnyJSXElementConstructor = keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>

type MultilineTextComponentListProps = {
    multilineText: string,
    keySelector?: (textLine: string) => number
}

/**
 * Creates a React Fragment which contains a component for every line of text from the `multilineText` attribute
 * @param Component component to use for each line
 * @returns `React.Fragment` with a number of components
 */
export const createMultilineTextComponentList = <C extends AnyJSXElementConstructor, P extends PropsOf<C>>(Component: C) => {
    const MultilineTextComponentList = (props: P & MultilineTextComponentListProps): JSX.Element | null => {
        const { multilineText, keySelector = hashCode } = props as MultilineTextComponentListProps
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
                    <Component {...props}
                        key={lineKeyPair[1]}>
                        {lineKeyPair[0]}
                    </Component>
                ))}
            </>
        )
    }
    return MultilineTextComponentList
}

export const getDisplayName = (component: { displayName?: string, name?: string }): string =>
    component?.displayName?.toString() ?? component?.name?.toString() ?? 'Component'

export const calculateFlexBasisExpr = (columnCount: number, gapPx: number): string =>
    `calc(calc(100% - ${gapPx * (columnCount - 1)}px) / ${columnCount})`
