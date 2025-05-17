import React from "react";

const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex items-center gap-x-4 mb-4">
            <div className="flex flex-col flex-1">
                <div className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center font-semibold text-gray-700 shrink-0">
                    {name.charAt(0).toUpperCase()}
                </div>
                <div className="text-gray-700 font-bold">{name}</div>
            </div>
            <div className="flex-4">{message}</div>
        </div>
    );
};

export default ChatMessage;
