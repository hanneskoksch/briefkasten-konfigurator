import { configureStore } from "@reduxjs/toolkit";
import stampReducer from "./slices/stampSlice";
import colorReducer from "./slices/colorSlice";
import nameFieldReducer from "./slices/nameFieldSlice";

export const store = configureStore({
  reducer: {
    stamps: stampReducer,
    color: colorReducer,
    namefield: nameFieldReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
