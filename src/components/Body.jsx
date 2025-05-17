import React, { lazy, Suspense } from "react";
import Header from "./Header/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import ClipVerseFallback from "./Fallback";

const Home = lazy(() => import("./Home/Home"));
const VideoListContainer = lazy(() => import("./Home/VideoListContainer"));
const WatchVideo = lazy(() => import("./Video/WatchVideo"));

const Layout = () => (
    <>
        <Header />
        <Suspense fallback={<ClipVerseFallback />}>
            <Outlet />
        </Suspense>
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
