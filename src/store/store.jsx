import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import videosSlice from "./slices/videosSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        videos: videosSlice,
    },
});

export default store;
