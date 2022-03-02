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
      if (state.value.length === 9) return;

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
    changeStampPosition: (
      state,
      action: PayloadAction<{ oldPosition: number; newPosition: number }>
    ) => {
      if (
        state.value.filter(
          (stamp) => stamp.position === action.payload.newPosition
        ).length === 0
      ) {
        const index = state.value.findIndex(
          (stamp) => stamp.position === action.payload.oldPosition
        );
        state.value[index].position = action.payload.newPosition;
      }
    },
  },
});

export const { addStamp, removeStamp, changeStampPosition } =
  stampSlice.actions;

export default stampSlice.reducer;
