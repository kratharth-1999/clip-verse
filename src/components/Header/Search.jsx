import { IconSearch } from "@tabler/icons-react";
import React from "react";

const Search = () => {
    return (
        <section className="flex items-center">
            <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-64 lg:w-96 px-4 py-2 rounded-full placeholder-gray-500 focus:outline-none focus:border-indigo-500 pr-10 border border-gray-300 shadow-sm transition duration-200 ease-in-out rounded-r-none"
            />
            <button className="bg-indigo-500 px-4 py-2 shadow-sm rounded-full rounded-l-none border border-indigo-500">
                <IconSearch className="text-white" />
            </button>
        </section>
    );
};

export default Search;
