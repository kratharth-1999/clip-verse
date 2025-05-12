import useGet from "./useGet";
import { YOUTUBE_POPULAR_VIDEO_LIST } from "../utils/constants";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addPopularVideos } from "../store/slices/videosSlice";

const useVideosList = () => {
    const { stateOfGetRequest: videoListRequest, getData } = useGet();
    const dispatch = useDispatch();

    useEffect(() => {
        getData(
            YOUTUBE_POPULAR_VIDEO_LIST + import.meta.env.VITE_GOOGLE_API_KEY
        );
    }, [getData]);

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
