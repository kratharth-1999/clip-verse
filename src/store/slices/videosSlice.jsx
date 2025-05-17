import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
    name: "videos",
    initialState: {
        popularVideos: null,
        currentPage: null,
        searchedVideos: null,
    },
    reducers: {
        addPopularVideos: (state, action) => {
            if (action.payload == null) {
                state.popularVideos = null;
                state.currentPage = null;
            } else {
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
            }
        },
        addSearchVideos: (state, action) => {
            state.searchedVideos = action.payload;
        },
    },
});

export const { addPopularVideos, addSearchVideos } = videosSlice.actions;

export default videosSlice.reducer;
