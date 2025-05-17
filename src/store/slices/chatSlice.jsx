import { createSlice } from "@reduxjs/toolkit";
import { MAX_LIVE_CHAT_MESSAGES } from "../../utils/constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.unshift(action.payload);
            if (state.messages.length > MAX_LIVE_CHAT_MESSAGES) {
                state.messages.pop();
            }
        },
    },
});

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;
