import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { shallowEqual } from 'react-redux'

export type HardSkill = {
    name: string,
    familiarityPercents: number
}
export type HardSkillsInfo = {
    title: string,
    info: string
}
export type HardSkillsState = {
    hardSkillsInfo: HardSkillsInfo,
    hardSkillValues: HardSkill[]
}

const initialState: HardSkillsState = {
    hardSkillsInfo: {
        title: 'I am a developer and blah-blah-blah',
        info: 'Dolor irure et amet voluptate deserunt. Cupidatat tempor amet sunt qui anim occaecat do cillum laboris magna in nisi voluptate minim. Amet irure non ut fugiat deserunt. Sunt elit laboris id incididunt consequat id. Magna anim exercitation qui excepteur dolore. Sunt ut esse adipisicing voluptate velit cupidatat ex consequat. Aute nisi irure id ad est culpa fugiat ad ex aute sunt voluptate reprehenderit consectetur.'
    },
    hardSkillValues: [
        {
            name: 'Kotlin',
            familiarityPercents: 80
        },
        {
            name: 'JS/TS',
            familiarityPercents: 45
        },
        {
            name: 'Android',
            familiarityPercents: 75
        },
        {
            name: 'React',
            familiarityPercents: 45
        },
        {
            name: 'Redux',
            familiarityPercents: 35
        },
        {
            name: 'Material UI',
            familiarityPercents: 40
        }
    ]
}

const hardSkillsStateName = 'hardSkills'
const hardSkillsSlice = createSlice({
    name: hardSkillsStateName,
    initialState,
    reducers: {
        updateHardSkills: (_, action: PayloadAction<HardSkillsState>) => action.payload
    }
})
type RootState = {
    [hardSkillsStateName]: HardSkillsState
}

const { reducer, actions } = hardSkillsSlice
export const { updateHardSkills } = actions
export const hardSkillsReducer = reducer
export default { [hardSkillsStateName]: hardSkillsReducer }

export const selectHardSkillInfo =
    (rootState: RootState): HardSkillsInfo => rootState.hardSkills.hardSkillsInfo
const _selectHardSkillValues = (rootState: RootState): HardSkill[] => rootState.hardSkills.hardSkillValues
export const selectHardSkillValues = [
    _selectHardSkillValues,
    shallowEqual
] as const
