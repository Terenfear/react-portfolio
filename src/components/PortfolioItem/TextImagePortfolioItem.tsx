import { Slide } from '@mui/material'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import PortfolioItem, { SMALL_AREA, PortfolioItemProps, LARGE_AREA } from './PortfolioItem'

export interface TextImagePortfolioItemProps extends Omit<PortfolioItemProps, 'startWithLargeArea'> {
    textAreaChildren: React.ReactNode,
    imageAreaChildren: React.ReactNode,
    startWithText?: boolean
}

const TextImagePortfolioItem = (props: TextImagePortfolioItemProps): JSX.Element => {
    const { textAreaChildren, imageAreaChildren, startWithText = true, ...portItemProps } = props
    const [ref, inView] = useInView({ rootMargin: '-15% 0px', triggerOnce: true })
    return (
        <PortfolioItem {...portItemProps}
            startWithLargeArea={startWithText}
            ref={ref}>
            <Slide in={inView}
                timeout={ANIMATION_DURATION_MS}
                direction={startWithText ? 'right' : 'left'}>
                <div style={{ gridArea: LARGE_AREA }}>{textAreaChildren}</div>
            </Slide>
            <Slide in={inView}
                timeout={ANIMATION_DURATION_MS}
                direction={startWithText ? 'left' : 'right'}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gridArea: SMALL_AREA
                }}>{imageAreaChildren}</div>
            </Slide>
        </PortfolioItem>
    )
}

const ANIMATION_DURATION_MS = 800

export default TextImagePortfolioItem
