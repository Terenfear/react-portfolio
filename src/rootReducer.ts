import { combineReducers } from 'redux'
import aboutMeNamedReducer from './components/AboutMe/aboutMeSlice'
import skillsNamedReducer from './components/Skills/skillsSlice'
import experienceNamedReducer from './components/Experience/experienceSlice'

const rootReducer = combineReducers({
    ...aboutMeNamedReducer,
    ...skillsNamedReducer,
    ...experienceNamedReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer
