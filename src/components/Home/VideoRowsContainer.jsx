import { useState, useEffect, useCallback } from "react";
import usePopularVideos from "../../hooks/usePopularVideos";
import VideoRow from "./VideoRow";
import { debouncedFunction } from "../../utils/methods";

const VideoRowsContainer = () => {
    const [triggerAPIRequest, setTriggerAPIRequest] = useState(false);
    const popularVideosRequest = usePopularVideos(triggerAPIRequest);
    const debounce = useCallback(
        debouncedFunction(setTriggerAPIRequest, 200),
        []
    );

    useEffect(() => {
        const controlDirection = () => {
            if (
                window.scrollY + window.innerHeight + 500 >=
                document.body.scrollHeight
            ) {
                debounce(true);
            }
        };
        setTriggerAPIRequest(true);
        window.addEventListener("scroll", controlDirection);
        return () => {
            window.removeEventListener("scroll", controlDirection);
        };
    }, [setTriggerAPIRequest, debounce]);

    useEffect(() => {
        if (popularVideosRequest.data || popularVideosRequest.getDataError)
            setTriggerAPIRequest(false);
    }, [popularVideosRequest]);

    return (
        <section className="pl-6 pr-4 py-4">
            <VideoRow type="popular" />
        </section>
    );
};

export default VideoRowsContainer;
