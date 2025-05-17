import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../store/slices/chatSlice";
import {
    generateRandomMessage,
    generateRandomName,
} from "../../../utils/methods";
import { TIME_INTERVAL_FOR_POLLING } from "../../../utils/constants";
import { useState } from "react";

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState("");
    const messages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: generateRandomMessage(),
                })
            );
        }, TIME_INTERVAL_FOR_POLLING);

        return () => clearInterval(interval);
    }, []);

    const addComment = (e) => {
        e.preventDefault();
        dispatch(addMessage({ name: "Kratharth", message: liveMessage }));
        setLiveMessage("");
    };

    return (
        <div className="border border-gray-300 rounded w-full mb-8 bg-slate-50 px-4 py-2 overflow-y-auto h-[320px] xl:h-[420px] 2xl:h-[620px] flex flex-col-reverse">
            <form
                className="flex items-center w-full"
                onSubmit={(e) => addComment(e)}
            >
                <input
                    type="text"
                    value={liveMessage}
                    placeholder="Add your comment..."
                    className="w-full px-4 py-2 rounded-full placeholder-gray-500 focus:outline-none focus:border-indigo-500 pr-10 border border-gray-300 shadow-sm transition duration-200 ease-in-out rounded-r-none"
                    onChange={(e) => setLiveMessage(e.target.value)}
                />
                <button className="bg-indigo-500 px-4 py-2 shadow-sm rounded-full rounded-l-none border border-indigo-500 text-white">
                    Send
                </button>
            </form>
            {messages.map((message, index) => (
                <ChatMessage
                    name={message.name}
                    message={message.message}
                    key={index}
                />
            ))}
        </div>
    );
};

export default LiveChat;
