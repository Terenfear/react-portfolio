import { Box, BoxProps, Theme, useTheme } from '@mui/material'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { useSelector } from 'react-redux'
import { calculateFlexBasisExpr } from '../../utils/reactUtils'
import useIsDesktop from '../../utils/useIsDesktop'
import HardSkillItem from './HardSkillItem'
import { selectHardSkillValues, HardSkill } from './hardSkillsSlice'

const HardSkillItemList = (props: BoxProps): JSX.Element => {
    const theme = useTheme()
    const skills = useSelector(...selectHardSkillValues)
    const isDesktop = useIsDesktop()
    const { ref, inView } = useInView({ threshold: 0.33, triggerOnce: true })

    const columnsCount = isDesktop ? 2
        : skills.length >= SKILL_COUNT_BREAKPOINT ? 3 : 2
    const itemGap = theme.spacing(ITEM_GAP_SPACING)
    const itemGapNumber = Number(itemGap.replace('px', '')) || 0
    const flexBasisExpr = calculateFlexBasisExpr(columnsCount, itemGapNumber)
    return (
        <Box {...props}
            ref={ref}
            sx={{
                ...props.sx,
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                gap: itemGap
            }}>
            {skills.map(s =>
                <GridItem
                    key={s.name}
                    skill={s}
                    showProgress={inView}
                    flex={`0 1 ${flexBasisExpr}`} />
            )}
        </Box>
    )
}
const GridItem = (props: { skill: HardSkill, showProgress: boolean } & BoxProps): JSX.Element => {
    const { skill: { name, familiarityPercents }, showProgress, ...boxProps } = props
    return (
        <Box {...boxProps}>
            <HardSkillItem
                label={name}
                progress={showProgress ? familiarityPercents : 0} />
        </Box>)
}

/**
 * Specifies how much items lead to extended column count
 */
const SKILL_COUNT_BREAKPOINT = 5
/**
 * Specifies gap size in theme spacing units
 */
const ITEM_GAP_SPACING = 4

export default HardSkillItemList
