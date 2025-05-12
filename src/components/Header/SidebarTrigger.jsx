import React from "react";
import { IconMenu2 } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/slices/appSlice";

const SidebarTrigger = () => {
    const dispatch = useDispatch();

    const toggleSidebarHandler = () => {
        dispatch(toggleSidebar());
    };

    return (
        <IconMenu2
            className="text-gray-500 cursor-pointer"
            onClick={toggleSidebarHandler}
        />
    );
};

export default SidebarTrigger;
