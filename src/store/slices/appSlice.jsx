import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isSidebarVisible: true,
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarVisible = !state.isSidebarVisible;
        },
    },
});

export const { toggleSidebar } = appSlice.actions;

export default appSlice.reducer;
