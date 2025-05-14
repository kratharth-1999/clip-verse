import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

const Home = () => {
    return (
        <div className="flex pl-0 pr-4 min-h-[calc(100vh_-_81px)]">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Home;
