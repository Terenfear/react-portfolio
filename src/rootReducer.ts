import { combineReducers } from 'redux'
import aboutMeNamedReducer from './components/AboutMe/aboutMeSlice'
import hardSkillsNamedReducer from './components/HardSkills/hardSkillsSlice'
import experienceNamedReducer from './components/Experience/experienceSlice'

const rootReducer = combineReducers({
    ...aboutMeNamedReducer,
    ...hardSkillsNamedReducer,
    ...experienceNamedReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer
