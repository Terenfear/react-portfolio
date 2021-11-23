import React from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import { useSelector } from 'react-redux'
import { calculateFlexBasisExpr } from '../../utils/reactUtils'
import SimplePortfolioItem from '../PortfolioItem/SimplePortfolioItem'
import SoftSkillItem from './SoftSkillItem'
import { selectSoftSkillTitle, selectSoftSkillValues } from './softSkillsSlice'

const SoftSkills = (): JSX.Element => {
    const theme = useTheme()
    const title = useSelector(selectSoftSkillTitle)
    const skills = useSelector(...selectSoftSkillValues)
    const itemGap = theme.spacing(8)
    const itemGapNumber = Number(itemGap.replace('px', '')) || 0
    const flexBasisExpr = calculateFlexBasisExpr(IDEAL_COLUMN_COUNT, itemGapNumber)
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
