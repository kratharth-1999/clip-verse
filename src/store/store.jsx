import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import videosSlice from "./slices/videosSlice";
import searchSlice from "./slices/searchSlice";

const store = configureStore({
    reducer: {
        app: appSlice,
        videos: videosSlice,
        search: searchSlice,
    },
});

export default store;
