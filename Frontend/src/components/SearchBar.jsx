import React from "react";

export default function SearchBar() {
    return (
        <form className="w-1/2 rounded-2xl shadow-secondary">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">
                Search
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="w-full p-4 ps-10 text-sm text-black border-secondary rounded-lg bg-third"
                    placeholder="Search..."
                    required=""
                />
                <button
                    type="submit"
                    className="absolute end-2.5 bottom-2.5 shadow-secondary tranform-main bg-secondary transform-main font-medium rounded-lg text-sm px-4 py-2"
                >
                    Search
                </button>
            </div>
        </form>
    );
}
