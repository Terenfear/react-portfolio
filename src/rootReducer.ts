import { combineReducers } from 'redux'
import aboutMeReducer, { aboutMeStateName } from './components/AboutMe/aboutMeSlice'
import skillsReducer, { skillsStateName } from './components/Skills/skillsSlice'

const rootReducer = combineReducers({
    [aboutMeStateName]: aboutMeReducer,
    [skillsStateName]: skillsReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer
