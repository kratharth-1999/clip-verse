import React from "react";
import { useSelector } from "react-redux";
import VideoCard from "./VideoCard";

const VideoRow = ({ type }) => {
    const videoRow = useSelector((store) => store.videos[type + "Videos"]);
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-8">
                {videoRow?.items?.map((video) => (
                    <VideoCard
                        key={video.id}
                        snippet={video?.snippet}
                        statistics={video?.statistics}
                    />
                ))}
            </div>
        </section>
    );
};

export default VideoRow;
