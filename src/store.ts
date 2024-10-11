import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./slices/colorSlice";
import configurationReducer from "./slices/configurationSlice";
import nameFieldReducer from "./slices/nameFieldSlice";

export const store = configureStore({
  reducer: {
    color: colorReducer,
    namefield: nameFieldReducer,
    configuration: configurationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
