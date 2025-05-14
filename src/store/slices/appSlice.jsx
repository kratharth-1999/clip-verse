import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isSidebarVisible: false,
    },
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarVisible = !state.isSidebarVisible;
        },
        openSidebar: (state) => {
            state.isSidebarVisible = true;
        },
        closeSidebar: (state) => {
            state.isSidebarVisible = false;
        },
    },
});

export const { toggleSidebar, openSidebar, closeSidebar } = appSlice.actions;

export default appSlice.reducer;
