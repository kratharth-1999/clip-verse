import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name: "videos",
    initialState: {
        popularVideos: null,
        currentPage: null,
    },
    reducers: {
        addPopularVideos: (state, action) => {
            if (state.popularVideos) {
                state.popularVideos[action.payload.nextPageToken] =
                    action.payload.items;
            } else {
                state.popularVideos = {
                    [action.payload.nextPageToken
                        ? action.payload.nextPageToken
                        : "null"]: action.payload.items,
                };
            }
            state.currentPage = action.payload.nextPageToken
                ? action.payload.nextPageToken
                : "null";
        },
    },
});

export const { addPopularVideos } = videosSlice.actions;

export default videosSlice.reducer;
