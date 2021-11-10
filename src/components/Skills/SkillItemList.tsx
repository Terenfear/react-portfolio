import { Box, BoxProps, Theme, useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSelector } from 'react-redux'
import useWindowDimensions from '../../utils/useWindowDimensions'
import SkillItem from './SkillItem'
import { selectSkillValues, Skill } from './skillsSlice'

const SkillItemList = (props: BoxProps): JSX.Element => {
    const skills = useSelector(...selectSkillValues)
    const theme = useTheme()
    const windowDimensions = useWindowDimensions()
    const isMobile = windowDimensions.width < theme.breakpoints.values.md
    const columnsCount = isMobile ?
        skills.length >= SKILL_COUNT_BREAKPOINT ? 3 : 2
        : 2
    const items = useMemo(() => createGridItems(skills, columnsCount), [skills, columnsCount])
    return (
        <Box {...props}
            sx={{
                ...props.sx,
                display: 'grid',
                gridTemplateColumns: `repeat(${columnsCount}, auto)`,
                gap: getItemGap,
                alignContent: 'center',
                alignItems: 'center',
            }}>
            {items}
        </Box>
    )
}
const GridItem = (props: { skill: Skill } & BoxProps): JSX.Element => {
    const { ref, inView } = useInView({ threshold: 0.5 })
    const { skill: { name, familiarityPercents }, ...boxProps } = props
    return (
        <Box {...boxProps}
            ref={ref}>
            <SkillItem
                label={name}
                progress={inView ? familiarityPercents : 0} />
        </Box>)
}

const LastGridRow = (props: { skillRow: Skill[], gridColumnCount: number }): JSX.Element => {
    const { skillRow, gridColumnCount } = props
    const emptyCellCount = gridColumnCount - skillRow.length
    if (emptyCellCount < 0) {
        throw new Error(`Skill count can't be lower than column count: ${skillRow.length} < ${gridColumnCount}`)
    }
    const getTranslateX = (theme: Theme): string => {
        const emptySpaceFraction = emptyCellCount / gridColumnCount / 2
        const gapsPx = theme.spacing(ITEM_GAP_SPACING * emptyCellCount * emptySpaceFraction)
        const emptySpace = `calc(${100 * emptySpaceFraction}% + ${gapsPx})`
        return `translateX(${emptySpace})`
    }
    return <Box
        sx={{
            gridColumn: '1 / -1', // span whole row
        }}>
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: `repeat(${gridColumnCount}, auto)`,
            gap: getItemGap,
            alignContent: 'center',
            alignItems: 'center',
            transform: getTranslateX
        }}>
            {skillRow.map(s => <GridItem key={s.name} skill={s} />)}
        </Box>
    </Box>
}

const createGridItems = (skills: Skill[], columnsCount: number): JSX.Element[] => {
    const lastRowLength = skills.length % columnsCount
    let result: JSX.Element[]
    if (lastRowLength > 0) {
        // using `slice` to make the whole function pure
        result = skills.slice(0, -lastRowLength) // all but the last row items
            .map(s => <GridItem key={s.name} skill={s} />)
        result.push(
            <LastGridRow
                skillRow={skills.slice(-lastRowLength)}  // only the last row items
                gridColumnCount={columnsCount} />
        )
    } else {
        result = skills.map(s => <GridItem key={s.name} skill={s} />)
    }
    return result
}

/**
 * Specifies how much items lead to extended column count
 */
const SKILL_COUNT_BREAKPOINT = 5
/**
 * Specifies gap size in theme spacing units
 */
const ITEM_GAP_SPACING = 4
const getItemGap = (theme: Theme): string => theme.spacing(ITEM_GAP_SPACING)

export default SkillItemList
