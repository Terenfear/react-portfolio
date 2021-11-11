import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { shallowEqual } from 'react-redux'

export type ExperiencePeriod = {
    period: {
        from: string,
        to: string
    },
    title: string,
    link?: string,
    description: string
}
export type ExperienceState = {
    title: string,
    periods: ExperiencePeriod[]
}

const initialState: ExperienceState = {
    title: 'Education & Experience',
    periods: [
        {
            period: {
                from: 'September, 2014',
                to: 'July, 2018'
            },
            title: 'Belarusian State University of Informatics and Radioelectronics',
            link: 'https://www.bsuir.by/en/',
            description: 'Cupidatat laborum quis ipsum commodo id aute consectetur et labore. Cillum consequat qui et officia veniam consectetur tempor. Mollit magna voluptate proident minim cillum tempor laboris irure. Magna labore ea labore minim ut officia.'
        },
        {
            period: {
                from: 'June, 2017',
                to: 'June, 2021'
            },
            title: 'Yellow',
            link: 'https://yellow.systems/',
            description: 'Cupidatat laborum quis ipsum commodo id aute consectetur et labore. Mollit magna voluptate proident minim cillum tempor laboris irure. Magna labore ea labore minim ut officia.'
        },
        {
            period: {
                from: 'September, 2021',
                to: 'Now'
            },
            title: 'Self-education',
            description: 'Cupidatat laborum quis ipsum commodo id aute consectetur et labore. Cillum consequat qui et officia veniam consectetur tempor. Magna labore ea labore minim ut officia.'
        },
    ]
}

const experienceStateName = 'experience'
const experienceSlice = createSlice({
    name: experienceStateName,
    initialState,
    reducers: {
        updateExperience: (_, action: PayloadAction<ExperienceState>) => action.payload
    }
})
type RootState = {
    [experienceStateName]: ExperienceState
}

const { reducer, actions } = experienceSlice
export const { updateExperience } = actions
export const experienceReducer = reducer
export default { [experienceStateName]: experienceReducer }

export const selectExperienceTitle =
    (rootState: RootState): string => rootState.experience.title
const _selectExperiencePeriods = (rootState: RootState): ExperiencePeriod[] => rootState.experience.periods
export const selectExperiencePeriods = [
    _selectExperiencePeriods,
    shallowEqual
] as const
