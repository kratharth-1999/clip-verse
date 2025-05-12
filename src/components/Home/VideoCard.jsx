import React from "react";
import { formatDaysUploaded, formatViews } from "../../utils/formatters";

const VideoCard = ({ snippet, statistics }) => {
    const { channelTitle, title, thumbnails, publishedAt } = snippet;
    const { viewCount } = statistics;

    return (
        <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
            <img src={thumbnails?.medium?.url} alt={title + " thumbnail"} />
            <div className="p-3">
                <h3 className="font-semibold text-sm md:text-base line-clamp-2">
                    {title}
                </h3>
                <div className="text-gray-600 text-xs mt-1">
                    <div>{channelTitle}</div>
                    <div className="flex items-center gap-x-4 flex-wrap">
                        <div>{formatViews(viewCount)} views</div>
                        <div>{formatDaysUploaded(publishedAt)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
