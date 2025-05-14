import React from "react";
import CommentList from "./CommentList";

const commentsData = [
    {
        name: "Kratharth",
        text: "Loerm ipsum dolor sit amet, consectutur adio",
        replies: [],
    },
    {
        name: "Pavan Kalyan",
        text: "This is an interesting video!",
        replies: [
            {
                name: "Krish",
                text: "I agree!",
                replies: [],
            },
            {
                name: "Srinivas",
                text: "Could you elaborate more?",
                replies: [
                    {
                        name: "Pavan Kalyan",
                        text: "Sure, I think...",
                        replies: [
                            {
                                name: "Krish",
                                text: "Thanks for explaining!",
                                replies: [],
                            },
                        ],
                    },
                    {
                        name: "Ramesh",
                        text: "That makes sense.",
                        replies: [],
                    },
                ],
            },
            {
                name: "Deepika",
                text: "Nice comment thread.",
                replies: [],
            },
            {
                name: "Mahesh",
                text: "Keep up the good work!",
                replies: [],
            },
        ],
    },
    {
        name: "Anjali",
        text: "Just passing by...",
        replies: [],
    },
    {
        name: "Vikram",
        text: "Subscribed!",
        replies: [],
    },
];

const CommentsContainer = () => {
    return (
        <div className="mt-6">
            <h2 className="font-bold text-xl mb-4">Comments</h2>
            <CommentList comments={commentsData} />
        </div>
    );
};

export default CommentsContainer;
