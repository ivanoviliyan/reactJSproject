import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ products, setFilteredProducts }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        const filtered = products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="flex gap-5 w-full items-center justify-center">
            <DropdownMenu />
            <input
                type="search"
                id="default-search"
                className="p-4 ps-10 text-sm text-black border-secondary shadow-secondary rounded-lg bg-third w-1/2"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
                type="button"
                className="bg-secondary px-4 py-3 rounded-xl tranform-main shadow-secondary"
                onClick={handleSearch}
            >
                <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
            </button>
        </div>
    );
}
