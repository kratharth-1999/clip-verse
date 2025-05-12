import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router";
import VideoListContainer from "./Home/VideoListContainer";
import WatchVideo from "./Video/WatchVideo";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/",
                element: <VideoListContainer />,
            },
            {
                path: "watch",
                element: <WatchVideo />,
            },
        ],
    },
]);

const Body = () => {
    return (
        <>
            <Header />
            <RouterProvider router={appRouter} />
        </>
    );
};

export default Body;
