import useGet from "./useGet";
import { YOUTUBE_SEARCH_RESULTS } from "../utils/constants";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addSearchVideos } from "../store/slices/videosSlice";

const useSearchVideo = (triggerAPIRequest, searchQuery) => {
    const { stateOfGetRequest: searchVideoRequest, getData } = useGet();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!triggerAPIRequest) return;
        let url = `${YOUTUBE_SEARCH_RESULTS}${
            import.meta.env.VITE_GOOGLE_API_KEY
        }&q=${searchQuery}`;
        getData(url);
    }, [getData, triggerAPIRequest, searchQuery]);

    useEffect(() => {
        if (!searchVideoRequest.data) return;
        dispatch(addSearchVideos(searchVideoRequest.data));
    }, [searchVideoRequest.data, dispatch]);

    useEffect(() => {
        if (!searchVideoRequest.getDataError) return;
        toast.error(searchVideoRequest.getDataError);
    }, [searchVideoRequest.getDataError]);

    return searchVideoRequest;
};

export default useSearchVideo;
