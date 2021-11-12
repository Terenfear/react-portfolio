import { Box, BoxProps, Theme, useMediaQuery, useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { useSelector } from 'react-redux'
import SkillItem from './SkillItem'
import { selectSkillValues, Skill } from './skillsSlice'

const SkillItemList = (props: BoxProps): JSX.Element => {
    const skills = useSelector(...selectSkillValues)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true })
    const columnsCount = isMobile ?
        skills.length >= SKILL_COUNT_BREAKPOINT ? 3 : 2
        : 2
    const { ref, inView } = useInView({ threshold: 0.33 })
    const items = useMemo(() => createGridItems(skills, columnsCount, inView), [skills, columnsCount, inView])
    return (
        <Box {...props}
            ref={ref}
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
const GridItem = (props: { skill: Skill, showProgress: boolean } & BoxProps): JSX.Element => {
    const { skill: { name, familiarityPercents }, showProgress, ...boxProps } = props
    return (
        <Box {...boxProps}>
            <SkillItem
                label={name}
                progress={showProgress ? familiarityPercents : 0} />
        </Box>)
}

const LastGridRow = (props: {
    skillRow: Skill[],
    gridColumnCount: number,
    showProgress: boolean
}): JSX.Element => {
    const { skillRow, gridColumnCount, showProgress } = props
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
            {skillRow.map(s =>
                <GridItem key={s.name} skill={s} showProgress={showProgress} />
            )}
        </Box>
    </Box>
}

const createGridItems = (
    skills: Skill[],
    columnsCount: number,
    showProgress: boolean
): JSX.Element[] => {
    const lastRowLength = skills.length % columnsCount
    let result: JSX.Element[]
    if (lastRowLength > 0) {
        // using `slice` to make the whole function pure
        result = skills.slice(0, -lastRowLength) // all but the last row items
            .map(s => <GridItem key={s.name} skill={s} showProgress={showProgress} />)
        result.push(
            <LastGridRow
                skillRow={skills.slice(-lastRowLength)}  // only the last row items
                gridColumnCount={columnsCount}
                showProgress={showProgress} />
        )
    } else {
        result = skills.map(s =>
            <GridItem key={s.name} skill={s} showProgress={showProgress} />
        )
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
