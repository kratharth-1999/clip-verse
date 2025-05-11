import React from "react";
import LogoAndMenu from "./LogoAndMenu";
import Search from "./Search";
import UserProfile from "./UserProfile";

const Header = () => {
    return (
        <div className="px-4 flex items-center justify-between">
            <LogoAndMenu />
            <Search />
            <UserProfile />
        </div>
    );
};

export default Header;
