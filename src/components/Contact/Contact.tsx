import { Box, Typography, useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { calculateFlexBasisExpr } from '../../utils/reactUtils'
import useIsMobile from '../../utils/useIsMobile'
import ContactOptionItem from './ContactOptionItem'
import { selectContactOptions, selectContactTitle } from './contactSlice'

const Contact = (): JSX.Element => {
    const theme = useTheme()
    const title = useSelector(selectContactTitle)
    const skills = useSelector(...selectContactOptions)
    const isMobile = useIsMobile()
    const itemGapInSpacingUnits = isMobile ? 4 : 8
    const itemGap = useMemo(
        () => theme.spacing(itemGapInSpacingUnits),
        [theme, itemGapInSpacingUnits]
    )
    const numberItemGap = useMemo(
        () => Number(itemGap.replace('px', '')) || 0,
        [itemGap]
    )
    const flexBasisExpr = calculateFlexBasisExpr(IDEAL_COLUMN_COUNT, numberItemGap)
    return (
        <Box>
            <Typography variant='h3' mb={3} textAlign='center'>{title}</Typography>
            <Box sx={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                gap: itemGap
            }}>
                {skills.map(s =>
                    <ContactOptionItem {...s}
                        key={s.name}
                        sx={{
                            [theme.breakpoints.up('md')]: {
                                flex: `0 1 ${flexBasisExpr}`
                            }
                        }} />
                )}
            </Box>
        </Box>
    )
}

const IDEAL_COLUMN_COUNT = 3

export default Contact
