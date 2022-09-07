import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { timezoneApi } from "../service/TimezoneService"
import { clockReducer } from "./reducers"

const rootReducer = combineReducers({
    clock: clockReducer,
    [timezoneApi.reducerPath]: timezoneApi.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: ((getDefaultMiddleware) =>
            getDefaultMiddleware().concat(timezoneApi.middleware)
        )
    })
}

export type TRootState = ReturnType<typeof rootReducer>
export type TAppStore = ReturnType<typeof setupStore>
export type TAppDispatch = TAppStore["dispatch"]