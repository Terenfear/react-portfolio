import { Box, Typography, useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { calculateFlexBasisExpr } from '../../utils/reactUtils'
import useIsMobile from '../../utils/useIsMobile'
import SimplePortfolioItem from '../PortfolioItem/SimplePortfolioItem'
import SoftSkillItem from './SoftSkillItem'
import { selectSoftSkillTitle, selectSoftSkillValues } from './softSkillsSlice'

const SoftSkills = (): JSX.Element => {
    const theme = useTheme()
    const title = useSelector(selectSoftSkillTitle)
    const skills = useSelector(...selectSoftSkillValues)
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
        <SimplePortfolioItem>
            <Typography variant='h3' mb={4} textAlign='center'>{title}</Typography>
            <Box sx={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                gap: itemGap
            }}>
                {skills.map(s =>
                    <SoftSkillItem {...s}
                        key={s.name}
                        sx={{
                            [theme.breakpoints.up('md')]: {
                                flex: `0 1 ${flexBasisExpr}`
                            }
                        }} />
                )}
            </Box>
        </SimplePortfolioItem>
    )
}

const IDEAL_COLUMN_COUNT = 3

export default SoftSkills
