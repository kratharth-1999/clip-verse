import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import CommentsContainer from "./Comments/CommentsContainer";
import VideoRow from "../Home/VideoRow";
import usePopularVideos from "../../hooks/usePopularVideos";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../store/slices/appSlice";
import { addPopularVideos } from "../../store/slices/videosSlice";
import LiveChat from "./Chat/LiveChat";

const WatchVideo = () => {
    const [searchParams] = useSearchParams();
    usePopularVideos(true, true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeSidebar());
        dispatch(addPopularVideos(null));
        window.scrollTo({ top: 0 });
    }, [dispatch]);

    return (
        <div className="flex w-full py-8 px-4 lg:px-8 gap-8 max-w-[2000px] mx-auto max-lg:flex-col">
            <section className="flex flex-col flex-7 2xl:flex-8">
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <iframe
                        className="w-full h-full"
                        src={
                            "https://www.youtube.com/embed/" +
                            searchParams.get("v")
                        }
                        title="Youtube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <CommentsContainer />
            </section>
            <aside className="flex-3 2xl:flex-2">
                <div>
                    <h2 className="font-semibold text-lg mb-3">Live Chat</h2>
                    <LiveChat />
                </div>
                <h2 className="font-semibold text-lg mb-3">Up Next</h2>
                <VideoRow type="popular" className="!grid-cols-1 gap-y-3" />
            </aside>
        </div>
    );
};

export default WatchVideo;
