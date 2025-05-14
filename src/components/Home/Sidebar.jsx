import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const isSidebarVisible = useSelector((store) => store.app.isSidebarVisible);
    return (
        <div
            className={`border-gray-200 ${
                isSidebarVisible ? "w-60 border-r" : "w-0"
            } transition-all duration-100 ease-in-out overflow-auto sticky left-0 top-0 h-[100vh] text-center content-center`}
        >
            Nothing here as of now
        </div>
    );
};

export default Sidebar;
