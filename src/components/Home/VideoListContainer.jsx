import React from "react";
import FilterList from "./FilterList";
import VideoRowsContainer from "./VideoRowsContainer";

const VideoListContainer = () => {
    return (
        <div className="flex-1 flex flex-col items-center">
            <FilterList />
            <VideoRowsContainer />
        </div>
    );
};

export default VideoListContainer;
