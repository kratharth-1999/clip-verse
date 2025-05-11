import React from "react";
import Sidebar from "./Sidebar";
import VideoListContainer from "./VideoListContainer";

const Home = () => {
    return (
        <div className="flex">
            <Sidebar />
            <VideoListContainer />
        </div>
    );
};

export default Home;
