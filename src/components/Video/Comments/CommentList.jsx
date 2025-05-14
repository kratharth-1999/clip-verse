import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
    return (
        <div className="space-y-4">
            {comments.map((comment, index) => (
                <div key={index}>
                    <Comment data={comment} />
                    {comment.replies && comment.replies.length > 0 && (
                        <div className="pl-6 ml-2 border-l border-gray-300">
                            <CommentList comments={comment.replies} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CommentList;
