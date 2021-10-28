import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { shallowEqual } from 'react-redux'

export type Skill = {
    name: string,
    familiarityPercents: number
}
export type SkillsInfo = {
    title: string,
    info: string
}
export type SkillsState = {
    skillsInfo: SkillsInfo,
    skillValues: Skill[]
}

const initialState: SkillsState = {
    skillsInfo: {
        title: 'I am a developer and blah-blah-blah',
        info: 'Dolor irure et amet voluptate deserunt. Cupidatat tempor amet sunt qui anim occaecat do cillum laboris magna in nisi voluptate minim. Amet irure non ut fugiat deserunt. Sunt elit laboris id incididunt consequat id. Magna anim exercitation qui excepteur dolore. Sunt ut esse adipisicing voluptate velit cupidatat ex consequat. Aute nisi irure id ad est culpa fugiat ad ex aute sunt voluptate reprehenderit consectetur.'
        // title: 'f',
        // info: 'b'
    },
    skillValues: [
        {
            name: 'Kotlin',
            familiarityPercents: 0.8
        },
        {
            name: 'JS/TS',
            familiarityPercents: 0.45
        },
        {
            name: 'Android',
            familiarityPercents: 0.75
        },
        {
            name: 'React',
            familiarityPercents: 0.45
        },
        {
            name: 'Redux',
            familiarityPercents: 0.35
        },
        {
            name: 'Material UI',
            familiarityPercents: 0.4
        }
    ]
}

export const skillsStateName = 'skills'
const skillsSlice = createSlice({
    name: skillsStateName,
    initialState,
    reducers: {
        updateSkills: (_, action: PayloadAction<SkillsState>) => action.payload
    }
})
type RootState = {
    [skillsStateName]: SkillsState
}

const { reducer, actions } = skillsSlice
export const { updateSkills } = actions

export const selectSkillInfo =
    (rootState: RootState): SkillsInfo => rootState.skills.skillsInfo
const _selectSkillValues = (rootState: RootState): Skill[] => rootState.skills.skillValues
export const selectSkillValues = [
    _selectSkillValues,
    shallowEqual
] as const
export default reducer
