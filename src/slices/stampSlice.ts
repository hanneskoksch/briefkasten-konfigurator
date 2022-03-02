import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Stamp } from "../model/image_data_models";

interface StampState {
  value: Stamp[];
}

const initialState: StampState = {
  value: [],
};

export const stampSlice = createSlice({
  name: "stamps",
  initialState,
  reducers: {
    addStamp: (state, action: PayloadAction<Stamp>) => {
      // abort if there are already 9 elements placed
      if (state.value.length === 9) return state;

      // get next free position for a stamp
      let nextFreePosition;
      for (let i = 0; i < 9; i++) {
        if (state.value.filter((stamp) => stamp.position === i).length === 0) {
          nextFreePosition = i;
          break;
        }
      }

      // push the new stamp to the array along with the free position
      state.value.push({ ...action.payload, position: nextFreePosition });
    },
    removeStamp: (state, action: PayloadAction<number>) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addStamp, removeStamp } = stampSlice.actions;

export default stampSlice.reducer;
