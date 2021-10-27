import { combineReducers } from 'redux'
import aboutMeReducer from './components/AboutMe/aboutMeSlice'

const rootReducer = combineReducers({
    aboutMe: aboutMeReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer