import { Box, useTheme } from '@mui/material'
import React, { useMemo } from 'react'

export interface PortfolioItemProps {
    startWithLargeArea?: boolean,
    disableVerticalPadding?: boolean
}

const PortfolioItem = (props: React.PropsWithChildren<PortfolioItemProps>): JSX.Element => {
    const { startWithLargeArea = true, disableVerticalPadding = false, children } = props
    const theme = useTheme()
    const { areaTemplate, columnTemplate } = useMemo(
        () => getContentTemplates(startWithLargeArea, theme.spacing(8)),
        [startWithLargeArea, theme]
    )
    return (
        <Box component='section'
            sx={{
                minHeight: 'inherit',
                display: 'grid',
                alignItems: 'center',
                gridTemplateAreas: `
            'startMargin ${START_GAP} ${SMALL_AREA} ${END_GAP} endMargin'
            'startMargin ${START_GAP} ${LARGE_AREA} ${END_GAP} endMargin'
            `,
                gridTemplateColumns: 'minmax(1rem, 5fr) 1rem minmax(auto, 90fr) 1rem minmax(1rem, 5fr)',
                rowGap: 4,
                ...(!disableVerticalPadding && { py: (t) => t.sizes.itemPaddingVertical }),
                [theme.breakpoints.isDesktopCSSMediaQuery]: {
                    rowGap: 0,
                    gridTemplateAreas: `'startMargin ${START_GAP} ${areaTemplate} ${END_GAP} endMargin'`,
                    gridTemplateColumns: `minmax(1rem, 1fr) 1rem ${columnTemplate} 1rem minmax(1rem, 1fr)`,
                }
            }}>
            {children}
        </Box>
    )
}

const getContentTemplates = (startWithLargeArea: boolean, contentGapPx: string): { areaTemplate: string, columnTemplate: string } => {
    const areas = [LARGE_AREA, '.', SMALL_AREA]
    const columns = ['minmax(auto, 2.67fr)', contentGapPx, 'minmax(auto, 1.33fr)']
    if (!startWithLargeArea) {
        areas.reverse()
        columns.reverse()
    }
    return {
        areaTemplate: areas.join(' '),
        columnTemplate: columns.join(' ')
    }
}

const START_GAP = 'startGap'
const END_GAP = 'endGap'
export const LARGE_AREA = 'largeArea'
export const SMALL_AREA = 'smallArea'

export const ALL_CONTENT_COLUMNS = `${START_GAP}-end / ${END_GAP}-start`

export default PortfolioItem
