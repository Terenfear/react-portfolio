import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AboutMeState = {
    profession: string,
    details: string,
    photoUrl: string,
    photoAlt: string
}

const initialState: AboutMeState = {
    profession: 'Web Developer',
    details: 'Laborum consequat sunt cillum excepteur eiusmod. Mollit id quis consectetur cupidatat sit. Est do aute excepteur occaecat eiusmod esse. Deserunt labore laborum ex est. Dolor occaecat sit deserunt sunt mollit ex eu labore ea occaecat magna est minim. Id et qui reprehenderit dolore in deserunt labore et do esse occaecat velit. Irure reprehenderit fugiat mollit duis deserunt adipisicing.' +
        '\n' +
        'Eu ipsum velit sint et Lorem culpa tempor pariatur dolor dolor veniam eu. Est adipisicing voluptate irure cupidatat commodo mollit. Eiusmod excepteur labore irure mollit velit cillum irure aliqua aliqua nostrud.',
    photoUrl: 'https://avatars.githubusercontent.com/u/15063346?v=4',
    photoAlt: 'Author'
}

const aboutMeStateName = 'aboutMe'
const aboutMeSlice = createSlice({
    name: aboutMeStateName,
    initialState,
    reducers: {
        updateAboutMe: (_, action: PayloadAction<AboutMeState>) => action.payload
    }
})
type RootState = {
    [aboutMeStateName]: AboutMeState
}

const { actions, reducer } = aboutMeSlice
export const { updateAboutMe } = actions
export const aboutMeReducer = reducer
export const selectAboutMe =
    (rootState: RootState): AboutMeState => rootState.aboutMe

export default { [aboutMeStateName]: aboutMeReducer }
