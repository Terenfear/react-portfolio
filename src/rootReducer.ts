import { combineReducers } from 'redux'
import appNamedReducer from './components/App/appSlice'
import aboutMeNamedReducer from './components/AboutMe/aboutMeSlice'
import hardSkillsNamedReducer from './components/HardSkills/hardSkillsSlice'
import experienceNamedReducer from './components/Experience/experienceSlice'
import softSkillsNamedReducer from './components/SoftSkills/softSkillsSlice'
import contactNamedReducer from './components/Contact/contactSlice'
import homeNamedReducer from './components/Home/homeSlice'

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
