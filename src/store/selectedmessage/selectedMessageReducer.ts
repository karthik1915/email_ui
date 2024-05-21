import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedMessage {
  id: string | null;
}

const initialState: SelectedMessage = {
  id: null,
};

const selectedMessageSlice = createSlice({
  name: "selectedMessage",
  initialState,
  reducers: {
    selectMessage: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const { selectMessage } = selectedMessageSlice.actions;

export default selectedMessageSlice.reducer;
