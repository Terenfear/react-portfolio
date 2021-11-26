import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AboutMeState = {
    profession: string,
    details: string,
    photoUrl: string,
    photoAlt: string
}

const initialState: AboutMeState = {
    profession: '',
    details: '',
    photoUrl: '',
    photoAlt: ''
}

const aboutMeStateName = 'aboutMe'
const aboutMeSlice = createSlice({
    name: aboutMeStateName,
    initialState,
    reducers: {
        updated: (_, action: PayloadAction<AboutMeState>) => action.payload
    }
})
type RootState = {
    [aboutMeStateName]: AboutMeState
}

const { actions, reducer } = aboutMeSlice
export const aboutMeActions = actions
export const selectAboutMe =
    (rootState: RootState): AboutMeState => rootState.aboutMe

export default { [aboutMeStateName]: reducer }
