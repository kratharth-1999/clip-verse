import React from "react";
import usePopularVideos from "../../hooks/usePopularVideos";
import VideoRow from "./VideoRow";

const VideoRowsContainer = () => {
    usePopularVideos();

    return (
        <section className="pl-6 pr-4 py-4">
            <VideoRow type="popular" />
        </section>
    );
};

export default VideoRowsContainer;
