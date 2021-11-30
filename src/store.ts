import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'

export default function configureAppStore() {
    const store = configureStore({
        reducer: rootReducer
    })
    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer))
    }
    return store
}

export type RootState = ReturnType<ReturnType<typeof configureAppStore>['getState']>;
export type AppDispatch = ReturnType<typeof configureAppStore>['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    AnyAction
>
