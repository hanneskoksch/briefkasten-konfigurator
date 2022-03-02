import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BaseColor } from "../utils/enums";

interface ColorSlice {
  value: BaseColor;
}

const initialState: ColorSlice = {
  value: BaseColor.Blue,
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<BaseColor>) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;
