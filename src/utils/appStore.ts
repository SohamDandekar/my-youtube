import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";

const appStore = configureStore({
    reducer: {
        app: appReducer,
    },
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;