import React from "react";
import Logo from "./Logo";
import SidebarTrigger from "./SidebarTrigger";

const LogoAndMenu = () => {
    return (
        <div className="flex items-center">
            <SidebarTrigger />
            <Logo />
        </div>
    );
};

export default LogoAndMenu;
