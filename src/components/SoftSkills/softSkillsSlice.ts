import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { shallowEqual } from 'react-redux'

export const enum SoftSkillIcon {
    Language = 'LANGUAGE',
    Devices = 'DEVICES',
    Communication = 'COMMUNICATION'
}

export type SoftSkill = {
    name: string,
    description: string,
    icon: SoftSkillIcon
}

export type SoftSkillsState = {
    title: string,
    skills: SoftSkill[]
}

const initialState: SoftSkillsState = {
    title: '',
    skills: []
}

const softSkillsStateName = 'softSkills'
const softSkillsSlice = createSlice({
    name: softSkillsStateName,
    initialState,
    reducers: {
        updated: (_, action: PayloadAction<SoftSkillsState>) => action.payload
    }
})
type RootState = {
    [softSkillsStateName]: SoftSkillsState
}

const { reducer, actions } = softSkillsSlice
export const softSkillsActions = actions

export const selectSoftSkillTitle =
    (rootState: RootState): string => rootState.softSkills.title
const _selectSoftSkillValues = (rootState: RootState): SoftSkill[] => rootState.softSkills.skills
export const selectSoftSkillValues = [
    _selectSoftSkillValues,
    shallowEqual
] as const

export default { [softSkillsStateName]: reducer }
