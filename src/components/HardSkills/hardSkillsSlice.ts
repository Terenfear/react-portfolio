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
        title: '',
        info: ''
    },
    hardSkillValues: []
}

const hardSkillsStateName = 'hardSkills'
const hardSkillsSlice = createSlice({
    name: hardSkillsStateName,
    initialState,
    reducers: {
        updated: (_, action: PayloadAction<HardSkillsState>) => action.payload
    }
})
type RootState = {
    [hardSkillsStateName]: HardSkillsState
}

const { reducer, actions } = hardSkillsSlice
export const hardSkillsActions = actions

export const selectHardSkillInfo =
    (rootState: RootState): HardSkillsInfo => rootState.hardSkills.hardSkillsInfo
const _selectHardSkillValues = (rootState: RootState): HardSkill[] => rootState.hardSkills.hardSkillValues
export const selectHardSkillValues = [
    _selectHardSkillValues,
    shallowEqual
] as const

export default { [hardSkillsStateName]: reducer }
