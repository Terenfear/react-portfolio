import { combineReducers } from 'redux'
import aboutMeNamedReducer from './components/AboutMe/aboutMeSlice'
import skillsNamedReducer from './components/Skills/skillsSlice'

const rootReducer = combineReducers({
    ...aboutMeNamedReducer,
    ...skillsNamedReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer
