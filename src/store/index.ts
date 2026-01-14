import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from "../features/auth/authSlice";
import { webinarsApi } from "../features/webinars/api/webinarsApi";

 const store = configureStore({
    reducer : {
        auth : authReducer,
        [webinarsApi.reducerPath] : webinarsApi.reducer,

    },
    middleware : (getDefaultMiddleWare) =>  getDefaultMiddleWare().concat(webinarsApi.middleware),
    devTools: import.meta.env.DEV, // dont import process as we are not using nodejs
});
setupListeners(store.dispatch)

export default store;