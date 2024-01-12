import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./slices/colorSlice";
import nameFieldReducer from "./slices/nameFieldSlice";
import stampReducer from "./slices/stampSlice";

export const store = configureStore({
  reducer: {
    stamps: stampReducer,
    color: colorReducer,
    namefield: nameFieldReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
