import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type HomeState = {
    title: string,
    subtitle: string,
    videoUrl: string,
    videoAlt: string
}

const initialState: HomeState = {
    title: 'Look mom, I\'m a Web Developer (but not quite)',
    subtitle: 'Hey dude, want some programming?',
    videoUrl: 'https://i.imgur.com/hDOfuOx.mp4',
    videoAlt: 'Author (not really)'
}

const homeStateName = 'home'
const homeSlice = createSlice({
    name: homeStateName,
    initialState,
    reducers: {
        updateHome: (_, action: PayloadAction<HomeState>) => action.payload
    }
})
type RootState = {
    [homeStateName]: HomeState
}

const { actions, reducer } = homeSlice
export const { updateHome } = actions
export const homeReducer = reducer
export const selectHome =
    (rootState: RootState): HomeState => rootState.home

export default { [homeStateName]: homeReducer }
