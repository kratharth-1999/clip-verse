import React from "react";
import FilterList from "./FilterList";
import VideoRowsContainer from "./VideoRowsContainer";

const VideoListContainer = () => {
    return (
        <div>
            <FilterList />
            <VideoRowsContainer />
        </div>
    );
};

export default VideoListContainer;
