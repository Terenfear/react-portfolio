import { combineReducers } from 'redux'
import aboutMeNamedReducer from './components/AboutMe/aboutMeSlice'
import hardSkillsNamedReducer from './components/HardSkills/hardSkillsSlice'
import experienceNamedReducer from './components/Experience/experienceSlice'
import softSkillsNamedReducer from './components/SoftSkills/softSkillsSlice'
import contactNamedReducer from './components/Contact/contactSlice'

const rootReducer = combineReducers({
    ...aboutMeNamedReducer,
    ...hardSkillsNamedReducer,
    ...experienceNamedReducer,
    ...softSkillsNamedReducer,
    ...contactNamedReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer
