import React, { useEffect } from "react";
import FilterList from "./FilterList";
import VideoRowsContainer from "./VideoRowsContainer";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../store/slices/appSlice";

const VideoListContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(openSidebar());
    }, [dispatch]);

    return (
        <div className="flex-1 flex flex-col items-center">
            <FilterList />
            <VideoRowsContainer />
        </div>
    );
};

export default VideoListContainer;
