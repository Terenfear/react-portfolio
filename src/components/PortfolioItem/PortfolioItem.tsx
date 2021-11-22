import { Box, useTheme } from '@mui/material'
import React, { useMemo } from 'react'

export interface PortfolioItemProps {
    startWithLargeArea?: boolean
}

const PortfolioItem = ({ startWithLargeArea = true, children }: React.PropsWithChildren<PortfolioItemProps>): JSX.Element => {
    const theme = useTheme()
    const { areaTemplate, columnTemplate } = useMemo(
        () => getContentTemplates(startWithLargeArea, theme.spacing(8)),
        [startWithLargeArea, theme]
    )
    return (
        <section>
            <Box sx={{
                display: 'grid',
                alignItems: 'center',
                gridTemplateAreas: `
            'startMargin ${START_GAP} ${SMALL_AREA} ${END_GAP} endMargin'
            'startMargin ${START_GAP} ${LARGE_AREA} ${END_GAP} endMargin'
            `,
                gridTemplateColumns: 'minmax(1rem, 5fr) 1rem minmax(auto, 90fr) 1rem minmax(1rem, 5fr)',
                rowGap: 4,
                [theme.breakpoints.up('md')]: {
                    rowGap: 0,
                    gridTemplateAreas: `'startMargin ${START_GAP} ${areaTemplate} ${END_GAP} endMargin'`,
                    gridTemplateColumns: `minmax(1rem, 1fr) 1rem ${columnTemplate} 1rem minmax(1rem, 1fr)`,
                }
            }}>
                {children}
            </Box>
        </section>
    )
}

const getContentTemplates = (startWithLargeArea: boolean, contentGapPx: string): { areaTemplate: string, columnTemplate: string } => {
    let areas
    let columns
    if (startWithLargeArea) {
        areas = [LARGE_AREA, SMALL_AREA]
        columns = ['minmax(auto, 2.67fr)', 'minmax(auto, 1.33fr)']
    } else {
        areas = [SMALL_AREA, LARGE_AREA]
        columns = ['minmax(auto, 1.33fr)', 'minmax(auto, 2.67fr)']
    }
    return {
        areaTemplate: areas.join(' . '),
        columnTemplate: columns.join(` ${contentGapPx} `)
    }
}

const START_GAP = 'startGap'
const END_GAP = 'endGap'
export const LARGE_AREA = 'largeArea'
export const SMALL_AREA = 'smallArea'

export const ALL_CONTENT_COLUMNS = `${START_GAP}-end / ${END_GAP}-start`

export default PortfolioItem
