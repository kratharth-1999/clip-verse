import React from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import VideoListContainer from "./Home/VideoListContainer";
import WatchVideo from "./Video/WatchVideo";

const Layout = () => (
    <>
        <Header />
        <Outlet />
    </>
);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
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
        ],
    },
]);

const Body = () => {
    return <RouterProvider router={appRouter} />;
};

export default Body;
