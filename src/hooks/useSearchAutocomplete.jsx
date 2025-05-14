import useGet from "./useGet";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useEffect } from "react";
import { toast } from "react-toastify";

const useSearchAutoComplete = () => {
    const { stateOfGetRequest: searchAutocompleteRequest, getData } = useGet();

    const fetchSearchAutoComplete = (query) => {
        getData(YOUTUBE_SEARCH_API + query, {}, {}, true);
    };

    useEffect(() => {
        if (!searchAutocompleteRequest.getDataError) return;
        toast.error(searchAutocompleteRequest.getDataError);
    }, [searchAutocompleteRequest.getDataError]);

    return { searchAutocompleteRequest, fetchSearchAutoComplete };
};

export default useSearchAutoComplete;
