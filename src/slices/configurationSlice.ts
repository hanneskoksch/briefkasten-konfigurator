import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Configuration, Stamp } from "../model/image_data_models";
import { BaseColor } from "../utils/enums";

const initialState: Configuration = {
  stamps: {
    1: null, //"Blüte 1-1728398535157",
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  },
  color: BaseColor.Blue,
  nameField: false,
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    setStampPositions: (
      state: Configuration,
      action: PayloadAction<Configuration["stamps"]>,
    ) => {
      state.stamps = action.payload;
    },
    addStamp: (state: Configuration, action: PayloadAction<Stamp>) => {
      // get next free position for a stamp
      let nextFreePosition;
      for (let i = 1; i < 10; i++) {
        if (state.stamps[i] === null) {
          nextFreePosition = i;
          break;
        }
      }

      if (nextFreePosition === undefined) {
        return;
      }

      const newStamp: Stamp = action.payload;

      const id: string = `${newStamp.name}-${new Date().getTime()}`;

      state.stamps[nextFreePosition] = id;
    },
    removeStamp: (state: Configuration, action: PayloadAction<string>) => {
      // state.stamps[action.payload] = null;
      const newStamps = { ...state.stamps };
      for (const key in newStamps) {
        if (newStamps[key] === action.payload) {
          newStamps[key] = null;
          break;
        }
      }
      state.stamps = newStamps;
    },
  },
});

export const { setStampPositions, addStamp, removeStamp } =
  configurationSlice.actions;

export default configurationSlice.reducer;
