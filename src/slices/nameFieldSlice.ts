import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NameFieldSlice {
  value: boolean;
}

const initialState: NameFieldSlice = {
  value: false,
};

export const nameFieldSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    toggleNameField: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { toggleNameField } = nameFieldSlice.actions;

export default nameFieldSlice.reducer;
