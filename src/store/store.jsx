import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import videosSlice from "./slices/videosSlice";
import searchSlice from "./slices/searchSlice";
import chatSlice from "./slices/chatSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        videos: videosSlice,
        search: searchSlice,
        chat: chatSlice,
    },
});

export default store;
