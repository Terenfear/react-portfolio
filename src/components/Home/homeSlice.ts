import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type HomeState = {
    title: string,
    subtitle: string,
    videoUrl: string,
    videoAlt: string
}

const initialState: HomeState = {
    title: '',
    subtitle: '',
    videoUrl: '',
    videoAlt: ''
}

const homeStateName = 'home'
const homeSlice = createSlice({
    name: homeStateName,
    initialState,
    reducers: {
        updated: (_, action: PayloadAction<HomeState>) => action.payload
    }
})
type RootState = {
    [homeStateName]: HomeState
}

const { actions, reducer } = homeSlice
export const homeActions = actions
export const selectHome =
    (rootState: RootState): HomeState => rootState.home
export default { [homeStateName]: reducer }
