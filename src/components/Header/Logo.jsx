import React from "react";
import { Link } from "react-router";

const Logo = () => {
    return (
        <Link to="/">
            <img
                src="/clip_verse_logo_mini.png"
                className="w-20 h-20 cursor-pointer ml-1"
            />
        </Link>
    );
};

export default Logo;
