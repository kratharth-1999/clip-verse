import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

const Home = () => {
    return (
        <div className="flex px-4 min-h-[calc(100vh_-_81px)]">
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Home;
