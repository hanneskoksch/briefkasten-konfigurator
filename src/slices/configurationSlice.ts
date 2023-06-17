import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BaseColor } from "../utils/enums";
import { Stamp } from "../model/image_data_models";

interface ConfigurationSlice {
  baseColor: BaseColor;
  nameField: boolean;
  stamps: Stamp[];
}

const initialState: ConfigurationSlice = {
  baseColor: BaseColor.Blue,
  nameField: false,
  stamps: [],
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<BaseColor>) => {
      state.baseColor = action.payload;
    },
    toggleNameField: (state, action: PayloadAction<boolean>) => {
      state.nameField = action.payload;
    },
    addStamp: (state, action: PayloadAction<Stamp>) => {
      // abort if there are already 9 elements placed
      if (state.stamps.length === 9) return;

      // get next free position for a stamp
      let nextFreePosition;
      for (let i = 0; i < 9; i++) {
        if (state.stamps.filter((stamp) => stamp.position === i).length === 0) {
          nextFreePosition = i;
          break;
        }
      }

      // push the new stamp to the array along with the free position
      state.stamps.push({ ...action.payload, position: nextFreePosition });
    },
    removeStamp: (state, action: PayloadAction<number>) => {
      state.stamps.splice(action.payload, 1);
    },
    changeStampPosition: (
      state,
      action: PayloadAction<{ oldPosition: number; newPosition: number }>
    ) => {
      if (
        state.stamps.filter(
          (stamp) => stamp.position === action.payload.newPosition
        ).length === 0
      ) {
        const index = state.stamps.findIndex(
          (stamp) => stamp.position === action.payload.oldPosition
        );
        state.stamps[index].position = action.payload.newPosition;
      }
    },
  },
});

export const { changeColor, toggleNameField, addStamp, removeStamp, changeStampPosition } = configurationSlice.actions;

export default configurationSlice.reducer;
