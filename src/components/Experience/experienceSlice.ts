import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { shallowEqual } from 'react-redux'

export type ExperiencePeriod = {
    id: string,
    period: {
        from: string,
        to: string
    },
    title: string,
    link?: string,
    description: string
}
export type ExperienceInfo = {
    title: string,
    photoUrl: string,
    photoAlt: string,
}
export type ExperienceState = {
    info: ExperienceInfo,
    periods: ExperiencePeriod[]
}

const initialState: ExperienceState = {
    info: {
        title: '',
        photoUrl: '',
        photoAlt: ''
    },
    periods: []
}

const experienceStateName = 'experience'
const experienceSlice = createSlice({
    name: experienceStateName,
    initialState,
    reducers: {
        updated: (_, action: PayloadAction<ExperienceState>) => action.payload
    }
})
type RootState = {
    [experienceStateName]: ExperienceState
}

const { reducer, actions } = experienceSlice
export const experienceActions = actions

export const selectExperienceInfo =
    (rootState: RootState): ExperienceInfo => rootState.experience.info
const _selectExperiencePeriods = (rootState: RootState): ExperiencePeriod[] => rootState.experience.periods
export const selectExperiencePeriods = [
    _selectExperiencePeriods,
    shallowEqual
] as const

export default { [experienceStateName]: reducer }
