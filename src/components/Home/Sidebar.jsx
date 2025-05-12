import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const isSidebarVisible = useSelector((store) => store.app.isSidebarVisible);
    return (
        <div
            className={`border-gray-200 ${
                isSidebarVisible ? "w-60 border-r" : "w-0"
            } transition-all duration-100 ease-in-out`}
        ></div>
    );
};

export default Sidebar;
