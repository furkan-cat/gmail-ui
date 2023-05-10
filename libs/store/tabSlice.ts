import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
  name: "tab",
  initialState: {
    currentTab: 0,
  },
  reducers: {
    setTab: (state, actions) => {
      state.currentTab = actions.payload;
    },
  },
});

export const { setTab } = tabSlice.actions;
export default tabSlice.reducer;
