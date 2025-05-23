import { IconX, IconSearch } from "@tabler/icons-react";
import React, { useEffect, useState, useCallback } from "react";
import useSearchAutoComplete from "../../hooks/useSearchAutocomplete";
import { debouncedFunction } from "../../utils/methods";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../../store/slices/searchSlice";
import useSearchVideo from "../../hooks/useSearchVideo";
import { addSearchVideos } from "../../store/slices/videosSlice";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [triggerSearchRequest, setTriggerSearchRequest] = useState(false);
    const { searchAutocompleteRequest, fetchSearchAutoComplete } =
        useSearchAutoComplete();
    const debounce = useCallback(
        debouncedFunction(fetchSearchAutoComplete, 200),
        []
    );
    const [searchSuggestions, setSearchSuggestions] = useState([
        "Cannot provide suggestions since Youtube does not have an autocomplete API anymore. Use the search button to fetch results",
    ]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
    const searchVideoRequest = useSearchVideo(
        triggerSearchRequest,
        searchQuery
    );

    useEffect(() => {
        if (!searchQuery || !searchQuery.length) return;
        if (searchCache[searchQuery]) {
            setSearchSuggestions(searchCache[searchQuery]);
            return;
        }
    }, [searchQuery, debounce]);

    useEffect(() => {
        if (!searchAutocompleteRequest.data) return;
        const searchSuggestions = [];
        searchAutocompleteRequest.data.split("[").forEach((ele, index) => {
            if (!ele.split('"')[1] || index === 1) return;
            return searchSuggestions.push(ele.split('"')[1]);
        });
        setSearchSuggestions(searchSuggestions);
        if (searchSuggestions.length)
            dispatch(cacheResults({ [searchQuery]: searchSuggestions }));
    }, [searchAutocompleteRequest, dispatch]);

    useEffect(() => {
        if (!searchVideoRequest.data && !searchVideoRequest.getDataError)
            return;
        setTriggerSearchRequest(false);
    }, [searchVideoRequest]);

    return (
        <section>
            <form
                className="flex items-center relative"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (searchQuery.length > 0) {
                        setTriggerSearchRequest(true);
                    }
                }}
            >
                <input
                    value={searchQuery}
                    type="text"
                    placeholder="Search..."
                    className="w-full md:w-64 lg:w-96 px-4 py-2 rounded-full placeholder-gray-500 focus:outline-none focus:border-indigo-500 pr-10 border border-gray-300 shadow-sm transition duration-200 ease-in-out rounded-r-none"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />
                {searchQuery.length > 0 && (
                    <IconX
                        className="text-indigo-500 right-16 cursor-pointer absolute"
                        onClick={() => {
                            setSearchQuery("");
                            dispatch(addSearchVideos(null));
                        }}
                    />
                )}
                <button className="bg-indigo-500 px-4 py-2 shadow-sm rounded-full rounded-l-none border border-indigo-500 cursor-pointer">
                    <IconSearch className="text-white" />
                </button>
            </form>
            {showSuggestions && searchSuggestions.length > 0 && (
                <section className="absolute bg-white border-gray-100 border border-solid rounded-lg mt-1 ml-1 flex flex-col gap-y-1 w-full md:w-64 lg:w-96">
                    {searchSuggestions.map((suggestion, index) => (
                        <div
                            className="hover:bg-gray-100 cursor-pointer px-4 py-2 flex items-center gap-x-2"
                            key={index}
                        >
                            <IconSearch className="text-indigo-500" size={16} />
                            {suggestion}
                        </div>
                    ))}
                </section>
            )}
        </section>
    );
};

export default Search;
