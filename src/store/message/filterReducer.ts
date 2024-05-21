import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  filter: string;
}

const initialState: FilterState = {
  filter: "all",
};

const filterSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<FilterState>) {
      state.filter = action.payload.filter;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
