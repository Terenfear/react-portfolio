import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { shallowEqual } from 'react-redux'

export type SoftSkill = {
    name: string,
    description: string
}

export type SoftSkillsState = {
    title: string,
    skills: SoftSkill[]
}

const initialState: SoftSkillsState = {
    title: 'Soft Skills',
    skills: [
        {
            name: 'Non velit quis sint commodo laborum minim laboris minim est culpa ad.',
            description: 'Reprehenderit nostrud aute sit laboris. Adipisicing eu officia officia cupidatat ipsum adipisicing eu Lorem do pariatur minim ipsum. Laboris voluptate culpa ullamco non consequat nisi irure sint nostrud. Ad nisi enim ut occaecat exercitation elit ad ad. Mollit in ullamco cillum qui.'
        },
        {
            name: 'Veniam elit eiusmod sint enim voluptate laboris.',
            description: 'Qui qui irure ex et. Dolore Lorem Lorem culpa non reprehenderit velit in deserunt do minim ad Lorem laborum. Velit reprehenderit pariatur ut sit magna eu aliquip anim voluptate. Irure anim est eu minim non. Do mollit officia ut velit cillum laborum nulla qui enim aliqua sint enim aliqua id.'
        },
        {
            name: 'Commodo labore consequat pariatur non nulla quis do ea.',
            description: 'Sint magna pariatur amet sint reprehenderit nulla aliqua tempor adipisicing voluptate. Labore nulla fugiat ipsum fugiat duis occaecat officia mollit qui aliqua fugiat tempor proident dolor. Duis esse Lorem consectetur ad anim aliquip ad eiusmod reprehenderit.'
        },
        {
            name: 'Laborum et incididunt commodo nisi laborum consectetur labore.',
            description: 'Do est anim et ea excepteur dolore labore nulla. Sit aute ipsum aliquip eu eu. Non enim id elit nisi.'
        },
        {
            name: 'Labore nostrud qui nulla amet ex ipsum.',
            description: 'Anim qui mollit sit commodo et reprehenderit commodo ex eu sint incididunt nisi. Eiusmod magna esse ullamco fugiat veniam consequat nostrud. Duis et Lorem ea in velit ex consequat eiusmod culpa veniam nulla proident esse adipisicing. Veniam in amet aliqua reprehenderit officia dolor.'
        },
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
