import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const VideoRow = ({ type, className }) => {
    const videoRow = useSelector((store) => store.videos[type + "Videos"]);
    return (
        <section>
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8 ${className}`}
            >
                {videoRow &&
                    Object.values(videoRow)
                        .flat()
                        ?.map((video) => (
                            <VideoCard
                                key={video.id}
                                snippet={video?.snippet}
                                statistics={video?.statistics}
                                id={video.id}
                            />
                        ))}
            </div>
        </section>
    );
};

export default VideoRow;
