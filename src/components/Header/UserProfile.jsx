import { IconUser } from "@tabler/icons-react";
import React from "react";

const UserProfile = () => {
    return (
        <div className="max-md:hidden">
            <button className="bg-indigo-500 px-4 py-2 shadow-sm rounded-full border border-indigo-500">
                <IconUser className="text-white" />
            </button>
        </div>
    );
};

export default UserProfile;
