import { Box, Theme, useTheme } from '@mui/material'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import SkillItem from './SkillItem'
import { selectSkillValues, Skill } from './skillsSlice'

const SkillItemList = (): JSX.Element => {
    const skills = useSelector(...selectSkillValues)
    const theme = useTheme()
    const columnsCount = skills.length >= SKILL_COUNT_BREAKPOINT ? 3 : 2
    const items = useMemo(() => createGridItems(skills, columnsCount), [skills, columnsCount])

    const mobileColumnTemplate = (theme: Theme) =>
        'repeat(' +
        `${columnsCount}, ` +
        'minmax(' +
        `min(33%, ${minItemSize(theme)}), ` +
        `${idealItemSize(theme)}` +
        ')' +
        ')'
    const desktopColumnTemplate = `repeat(${columnsCount}, max-content)`
    return (
        <Box sx={{
            display: 'grid',
            gridTemplateColumns: mobileColumnTemplate,
            gap: itemGap,
            alignContent: 'center',
            alignItems: 'center',
            [theme.breakpoints.up('md')]: {
                gridTemplateColumns: desktopColumnTemplate
            }
        }}>
            {items}
        </Box>
    )
}
const GridItem = (props: { skill: Skill }): JSX.Element => {
    const theme = useTheme()
    const { name, familiarityPercents } = props.skill
    return <SkillItem
        label={name}
        progress={familiarityPercents}
        sx={{
            width: '100%',
            height: '100%',
            maxWidth: idealItemSize,
            maxHeight: idealItemSize,
            [theme.breakpoints.up('md')]: {
                width: idealItemSize,
                height: idealItemSize,
            }
        }} />
}

const LastGridRow = (
    props: {
        skillRow: Skill[],
        gridColumnsCount: number
    }
): JSX.Element => {
    const { skillRow, gridColumnsCount } = props
    if (skillRow.length < 1) {
        throw new Error('Skill row must not be empty')
    }
    return <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            gridColumn: `1 / span ${gridColumnsCount}`,
            gap: itemGap
        }}>
        {skillRow.map(s => <GridItem key={s.name} skill={s} />)}
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
                gridColumnsCount={columnsCount} />
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
 * Specifies ideal item size in theme spacing units
 */
const ITEM_SIZE_SP = 16

const idealItemSize = (theme: Theme) => theme.spacing(ITEM_SIZE_SP)
const minItemSize = (theme: Theme) => theme.spacing(3)
const itemGap = (theme: Theme) => theme.spacing(4)

export default SkillItemList
