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
        title: 'Education & Experience',
        photoUrl: 'https://i1.sndcdn.com/avatars-000288873036-ix0cdf-t500x500.jpg',
        photoAlt: "Hackerman, though it's not me"
    },
    periods: [
        {
            id: '6b701b02-7d2f-4c51-b687-e9a7edcdeda1',
            period: {
                from: 'September, 2014',
                to: 'July, 2018'
            },
            title: 'Belarusian State University of Informatics and Radioelectronics',
            link: 'https://www.bsuir.by/en/',
            description: 'Cupidatat laborum quis ipsum commodo id aute consectetur et labore. Cillum consequat qui et officia veniam consectetur tempor. Mollit magna voluptate proident minim cillum tempor laboris irure. Magna labore ea labore minim ut officia.'
        },
        {
            id: '296460ad-77bb-4bc1-be8e-686dbd9f3379',
            period: {
                from: 'June, 2017',
                to: 'June, 2021'
            },
            title: 'Yellow',
            link: 'https://yellow.systems/',
            description: 'Cupidatat laborum quis ipsum commodo id aute consectetur et labore. Mollit magna voluptate proident minim cillum tempor laboris irure. Magna labore ea labore minim ut officia.'
        },
        {
            id: 'e6357676-6584-4bff-84f8-3901d1e3be62',
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

export const selectExperienceInfo =
    (rootState: RootState): ExperienceInfo => rootState.experience.info
const _selectExperiencePeriods = (rootState: RootState): ExperiencePeriod[] => rootState.experience.periods
export const selectExperiencePeriods = [
    _selectExperiencePeriods,
    shallowEqual
] as const
