import { combineReducers } from 'redux'
import aboutMeNamedReducer from './components/AboutMe/aboutMeSlice'
import appNamedReducer from './components/App/appSlice'
import contactNamedReducer from './components/Contact/contactSlice'
import experienceNamedReducer from './components/Experience/experienceSlice'
import hardSkillsNamedReducer from './components/HardSkills/hardSkillsSlice'
import homeNamedReducer from './components/Home/homeSlice'
import softSkillsNamedReducer from './components/SoftSkills/softSkillsSlice'

const rootReducer = combineReducers({
    ...appNamedReducer,
    ...aboutMeNamedReducer,
    ...hardSkillsNamedReducer,
    ...experienceNamedReducer,
    ...softSkillsNamedReducer,
    ...contactNamedReducer,
    ...homeNamedReducer,
})

export default rootReducer
