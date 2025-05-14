import { IconSearch } from "@tabler/icons-react";
import React, { useEffect, useState, useCallback } from "react";
import useSearchAutoComplete from "../../hooks/useSearchAutocomplete";
import { debouncedFunction } from "../../utils/methods";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../../store/slices/searchSlice";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { searchAutocompleteRequest, fetchSearchAutoComplete } =
        useSearchAutoComplete();
    const debounce = useCallback(
        debouncedFunction(fetchSearchAutoComplete, 200),
        []
    );
    const [searchSuggestions, setSearchSuggestions] = useState([
        "iphone",
        "iphone pro max",
    ]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!searchQuery || !searchQuery.length) return;
        if (searchCache[searchQuery]) {
            setSearchSuggestions(searchCache[searchQuery]);
            return;
        }
        debounce(searchQuery);
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

    return (
        <section>
            <section className="flex items-center">
                <input
                    value={searchQuery}
                    type="text"
                    placeholder="Search..."
                    className="w-full md:w-64 lg:w-96 px-4 py-2 rounded-full placeholder-gray-500 focus:outline-none focus:border-indigo-500 pr-10 border border-gray-300 shadow-sm transition duration-200 ease-in-out rounded-r-none"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />
                <button className="bg-indigo-500 px-4 py-2 shadow-sm rounded-full rounded-l-none border border-indigo-500">
                    <IconSearch className="text-white" />
                </button>
            </section>
            {showSuggestions && searchSuggestions.length > 0 && (
                <section className="absolute bg-white border-gray-100 border border-solid rounded-lg mt-1 ml-1 flex flex-col gap-y-1 w-full md:w-64 lg:w-96">
                    {searchSuggestions.map((suggestion) => (
                        <div className="hover:bg-gray-100 cursor-pointer px-4 py-2 flex items-center gap-x-2">
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
