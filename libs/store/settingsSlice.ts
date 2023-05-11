import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    showSettingsPopover: false,
  },
  reducers: {
    togglePopover: (state) => {
      state.showSettingsPopover = !state.showSettingsPopover;
      console.log(state.showSettingsPopover);
    },
  },
});

export const { togglePopover } = settingsSlice.actions;
export default settingsSlice.reducer;
