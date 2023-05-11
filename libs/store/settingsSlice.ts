import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    showSettings: false,
  },
  reducers: {
    togglePopover: (state) => {
      state.showSettings = !state.showSettings;
      console.log(state.showSettings);
    },
  },
});

export const { togglePopover } = settingsSlice.actions;
export default settingsSlice.reducer;
