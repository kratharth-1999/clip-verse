import useGet from "./useGet";
import { YOUTUBE_POPULAR_VIDEO_LIST } from "../utils/constants";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../store/slices/videosSlice";

const useVideosList = (triggerAPIRequest, makeAPICallForLastBatch) => {
    const { stateOfGetRequest: videoListRequest, getData } = useGet();
    const dispatch = useDispatch();
    const currentPageToken = useSelector((store) => store.videos.currentPage);
    const videos = useSelector((store) => store.videos.popularVideos);

    useEffect(() => {
        if (
            !triggerAPIRequest ||
            (currentPageToken === "null" && !makeAPICallForLastBatch)
        )
            return;
        let url = `${YOUTUBE_POPULAR_VIDEO_LIST}${
            import.meta.env.VITE_GOOGLE_API_KEY
        }`;
        if (currentPageToken && currentPageToken !== "null")
            url += `&pageToken=${currentPageToken}`;
        if (currentPageToken === "null" && videos)
            url += `&pageToken=${Object.keys(videos)[0]}`;
        getData(url);
    }, [getData, triggerAPIRequest]);

    useEffect(() => {
        if (!videoListRequest.data) return;
        dispatch(addPopularVideos(videoListRequest.data));
    }, [videoListRequest.data, dispatch]);

    useEffect(() => {
        if (!videoListRequest.getDataError) return;
        toast.error(videoListRequest.getDataError);
    }, [videoListRequest.getDataError]);

    return videoListRequest;
};

export default useVideosList;
