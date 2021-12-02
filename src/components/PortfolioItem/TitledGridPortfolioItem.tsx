import { Box, BoxProps, Typography, useTheme } from '@mui/material'
import React from 'react'
import { AnyJSXElementConstructor, calculateFlexBasisExpr } from '../../utils/reactUtils'
import SimplePortfolioItem from './SimplePortfolioItem'
import { Property } from 'csstype'

interface TitledGridPortfolioItemProps<T> {
    title: string,
    items: T[],
    keySelector: (item: T) => string,
    gridItemComponent: AnyJSXElementConstructor<T & BoxProps>,
    maxColumnCount: number,
    itemFlexGrow?: number,
    gap?: Property.Gap
}

const TitledGridPortfolioItem = <T,>(props: TitledGridPortfolioItemProps<T>): JSX.Element => {
    const theme = useTheme()
    const {
        title,
        items,
        keySelector,
        gridItemComponent: Component,
        maxColumnCount: columnCount,
        itemFlexGrow = 1,
        gap = theme.spacing(8)
    } = props

    const itemGapNumber = typeof gap !== 'number' ?
        Number(gap.replace('px', '')) || 0 :
        gap
    const flexBasisExpr = calculateFlexBasisExpr(columnCount, itemGapNumber)
    return (
        <SimplePortfolioItem>
            <Typography variant='h3' mb={gap} textAlign='center'>{title}</Typography>
            <Box sx={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                gap: gap
            }}>
                {items.map(s =>
                    <Component key={keySelector(s)}
                        sx={{
                            flexGrow: itemFlexGrow,
                            flexShrink: 1,
                            flexBasis: 'auto',
                            [theme.breakpoints.isDesktopCSSMediaQuery]: {
                                flexBasis: flexBasisExpr
                            }
                        }}
                        {...s} />
                )}
            </Box>
        </SimplePortfolioItem>
    )
}

export default TitledGridPortfolioItem
