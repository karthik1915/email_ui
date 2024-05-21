import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MessageType } from "@/constants/MessageTypes";

interface MessageState {
  messages: MessageType[];
  loading: boolean;
}

const initialState: MessageState = {
  messages: [],
  loading: false,
};

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages(state, action: PayloadAction<MessageType[]>) {
      state.messages = action.payload;
      state.loading = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    addMessage(state, action: PayloadAction<MessageType>) {
      state.messages.push(action.payload);
    },
    deleteMessage(state, action: PayloadAction<string>) {
      state.messages = state.messages.filter(
        (message) => message.id !== action.payload
      );
    },
  },
});

export const { setMessages, addMessage, setLoading, deleteMessage } =
  messageSlice.actions;

export default messageSlice.reducer;
