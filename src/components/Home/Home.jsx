import React from "react";
import Sidebar from "./Sidebar";
import VideoListContainer from "./VideoListContainer";

const Home = () => {
    return (
        <div className="flex px-4 min-h-[calc(100vh_-_81px)]">
            <Sidebar />
            <VideoListContainer />
        </div>
    );
};

export default Home;
