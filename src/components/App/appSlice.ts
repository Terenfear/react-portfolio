import { createSlice } from '@reduxjs/toolkit'
import { batch } from 'react-redux'
import backendApi from '../../backendApi'
import { AppThunk, RootState } from '../../store'
import { aboutMeActions } from '../AboutMe/aboutMeSlice'
import { contactActions } from '../Contact/contactSlice'
import { experienceActions } from '../Experience/experienceSlice'
import { hardSkillsActions } from '../HardSkills/hardSkillsSlice'
import { homeActions } from '../Home/homeSlice'
import { softSkillsActions } from '../SoftSkills/softSkillsSlice'

export type AppState = {
    isLoading: boolean
}

const initialState: AppState = {
    isLoading: true
}

const appSliceName = 'app'
const appSlice = createSlice({
    name: appSliceName,
    initialState,
    reducers: {
        appLoadingStarted: (state) => { state.isLoading = true },
        appLoadingFinished: (state) => { state.isLoading = false }
    }
})

const { actions, reducer } = appSlice
export const selectIsLoading = (rootState: RootState): boolean =>
    rootState.app.isLoading

// TODO(Nov 26, 2021): cache result?
export const appStarted = (): AppThunk => async (dispatch) => {
    dispatch(actions.appLoadingStarted())
    const appData = (await backendApi.fetchAppData())[0] as RootState
    batch(() => {
        dispatch(actions.appLoadingFinished())
        dispatch(homeActions.updated(appData.home))
        dispatch(aboutMeActions.updated(appData.aboutMe))
        dispatch(hardSkillsActions.updated(appData.hardSkills))
        dispatch(softSkillsActions.updated(appData.softSkills))
        dispatch(experienceActions.updated(appData.experience))
        dispatch(contactActions.updated(appData.contact))
    })
}

export default { [appSliceName]: reducer }
