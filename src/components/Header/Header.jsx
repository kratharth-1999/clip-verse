import React from "react";
import LogoAndMenu from "./LogoAndMenu";
import Search from "./Search";
import UserProfile from "./UserProfile";

const Header = () => {
    return (
        <div className="px-4 flex items-center justify-between border-b border-b-gray-200">
            <LogoAndMenu />
            <Search />
            <UserProfile />
        </div>
    );
};

export default Header;
