import React from "react";

const Comment = ({ data }) => {
    const { name, text } = data;
    return (
        <div className="flex items-start gap-x-3 mt-2">
            <div className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center font-semibold text-gray-700">
                {name.charAt(0).toUpperCase()}
            </div>
            <div>
                <p className="font-semibold text-gray-800">{name}</p>
                <p className="text-gray-700 text-sm">{text}</p>
            </div>
        </div>
    );
};

export default Comment;
