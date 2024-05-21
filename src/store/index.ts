import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./message/messageReducer";
import selectedMessageReducer from "./selectedmessage/selectedMessageReducer";
import filterReducer from "./message/filterReducer";

export const store = configureStore({
  reducer: {
    message: messageReducer,
    selectedMessage: selectedMessageReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {}
export type AppDispatch = typeof store.dispatch;
