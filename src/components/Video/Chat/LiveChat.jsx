import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../../store/slices/chatSlice";
import {
    generateRandomMessage,
    generateRandomName,
} from "../../../utils/methods";
import { TIME_INTERVAL_FOR_POLLING } from "../../../utils/constants";

const LiveChat = () => {
    const dispatch = useDispatch();
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

    return (
        <div className="border border-gray-300 rounded w-full mb-8 bg-slate-50 px-4 py-2 overflow-y-auto lg:h-[500px] xl:h-[600px] 2xl:h-[800px] flex flex-col-reverse">
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
