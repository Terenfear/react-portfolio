import React from 'react'
import PortfolioItem, { SMALL_AREA, PortfolioItemProps, LARGE_AREA } from './PortfolioItem'

export interface TextImagePortfolioItemProps extends PortfolioItemProps {
    textAreaChildren?: React.ReactNode,
    imageAreaChildren?: React.ReactNode,
    startWithText?: boolean
}

const TextImagePortfolioItem = (props: TextImagePortfolioItemProps): JSX.Element => {
    const { textAreaChildren, imageAreaChildren, startWithText, ...portItemProps } = props
    return (
        <PortfolioItem {...portItemProps}
            startWithLargeArea={startWithText}>
            <div style={{ gridArea: LARGE_AREA }}>{textAreaChildren}</div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gridArea: SMALL_AREA
            }}>{imageAreaChildren}</div>
        </PortfolioItem>
    )
}

export default TextImagePortfolioItem
