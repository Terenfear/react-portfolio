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
    title: 'Soft Skills',
    skills: [
        {
            name: 'English - B2',
            description: 'Reprehenderit nostrud aute sit laboris. Adipisicing eu officia officia cupidatat ipsum adipisicing eu Lorem do pariatur minim ipsum. Laboris voluptate culpa ullamco non consequat nisi irure sint nostrud. Ad nisi enim ut occaecat exercitation elit ad ad. Mollit in ullamco cillum qui.',
            icon: SoftSkillIcon.Language
        },
        {
            name: 'Been there, done that',
            description: 'Qui qui irure ex et. Dolore Lorem Lorem culpa non reprehenderit velit in deserunt do minim ad Lorem laborum. Velit reprehenderit pariatur ut sit magna eu aliquip anim voluptate. Irure anim est eu minim non. Do mollit officia ut velit cillum laborum nulla qui enim aliqua sint enim aliqua id.',
            icon: SoftSkillIcon.Devices
        },
        {
            name: 'Can talk with customers',
            description: 'Sint magna pariatur amet sint reprehenderit nulla aliqua tempor adipisicing voluptate. Labore nulla fugiat ipsum fugiat duis occaecat officia mollit qui aliqua fugiat tempor proident dolor. Duis esse Lorem consectetur ad anim aliquip ad eiusmod reprehenderit.',
            icon: SoftSkillIcon.Communication
        }
    ]
}

const softSkillsStateName = 'softSkills'
const softSkillsSlice = createSlice({
    name: softSkillsStateName,
    initialState,
    reducers: {
        updateSoftSkills: (_, action: PayloadAction<SoftSkillsState>) => action.payload
    }
})
type RootState = {
    [softSkillsStateName]: SoftSkillsState
}
const { reducer, actions } = softSkillsSlice
export const { updateSoftSkills } = actions
export const softSkillsReducer = reducer
export default { [softSkillsStateName]: softSkillsReducer }

export const selectSoftSkillTitle =
    (rootState: RootState): string => rootState.softSkills.title
const _selectSoftSkillValues = (rootState: RootState): SoftSkill[] => rootState.softSkills.skills
export const selectSoftSkillValues = [
    _selectSoftSkillValues,
    shallowEqual
] as const
