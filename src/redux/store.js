import {configureStore} from "@reduxjs/toolkit";
import {universityApi} from "./api/universityApi";
import {applicationService} from "./api/applicationService";

export const store = configureStore({
    reducer: {
        [universityApi.reducerPath]: universityApi.reducer,
        [applicationService.reducerPath]: applicationService.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(universityApi.middleware, applicationService.middleware),
})