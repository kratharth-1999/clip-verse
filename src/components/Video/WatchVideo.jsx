import React from "react";
import { useSearchParams } from "react-router";

const WatchVideo = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    return (
        <div className="flex w-full py-2">
            <section className="flex flex-col flex-2">
                <iframe
                    width="100%"
                    height="70%"
                    src={
                        "https://www.youtube.com/embed/" + searchParams.get("v")
                    }
                    title="Youtube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </section>
            <section className="flex-1"></section>
        </div>
    );
};

export default WatchVideo;
