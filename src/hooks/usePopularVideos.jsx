import useGet from "./useGet";
import { YOUTUBE_POPULAR_VIDEO_LIST } from "../utils/constants";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addPopularVideos } from "../store/slices/videosSlice";

const useVideosList = (triggerAPIRequest) => {
    const { stateOfGetRequest: videoListRequest, getData } = useGet();
    const dispatch = useDispatch();
    const currentPageToken = useSelector((store) => store.videos.currentPage);

    useEffect(() => {
        if (!triggerAPIRequest || currentPageToken === "null") return;
        let url = `${YOUTUBE_POPULAR_VIDEO_LIST}${
            import.meta.env.VITE_GOOGLE_API_KEY
        }`;
        if (currentPageToken) url += `&pageToken=${currentPageToken}`;
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
