import { baseDatabase, stampsDatabase } from "@/utils/stamps_database";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { Configuration, Stamp } from "../model/image_data_models";
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
  selectedStamp: null,
};

export const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    resetConfiguration: (state: Configuration) => {
      state = initialState;
      return state;
    },
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

      const id: string = `${newStamp.name}-${new Date().getTime()}-${Math.random()}`;

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
      // Also reset selected stamp if any stamp was removed
      state.selectedStamp = null;
    },
    toggleNameField: (state: Configuration, action: PayloadAction<boolean>) => {
      state.nameField = action.payload;
    },
    changeBaseColor: (
      state: Configuration,
      action: PayloadAction<BaseColor>,
    ) => {
      state.color = action.payload;
    },
    setSelectedStamp: (
      state: Configuration,
      action: PayloadAction<string | null>,
    ) => {
      state.selectedStamp = action.payload;
    },
    randomConfiguration: (state: Configuration) => {
      const randomBase =
        baseDatabase[Math.floor(Math.random() * baseDatabase.length)];

      state.color = randomBase.enum;

      // iterate over all stamp positions
      for (let i = 1; i < 10; i++) {
        const shouldAddStamp = Math.random() > 0.5;
        if (shouldAddStamp) {
          // get a random stamp from the database
          const randomStampIndex = Math.floor(
            Math.random() * stampsDatabase.length,
          );
          const randomStamp = stampsDatabase[randomStampIndex];
          const id: string = `${randomStamp.name}-${new Date().getTime()}-${Math.random()}`;
          state.stamps[i] = id;
        }
      }
    },
  },
});

export const {
  resetConfiguration,
  setStampPositions,
  addStamp,
  removeStamp,
  toggleNameField,
  changeBaseColor,
  randomConfiguration,
  setSelectedStamp,
} = configurationSlice.actions;

export default configurationSlice.reducer;
