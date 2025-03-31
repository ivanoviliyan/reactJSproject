import React from "react";
import DropdownMenu from "./DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <>
      <div className="flex gap-5 w-full items-center justify-center">
        <DropdownMenu />
        <input
          type="search"
          id="default-search"
          className="p-4 ps-10 text-sm text-black border-secondary shadow-secondary rounded-lg bg-third w-1/2"
          placeholder="Search..."
          required=""
        />
        <button
          type="submit"
          className="bg-secondary px-4 py-3 rounded-xl tranform-main shadow-secondary"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} /> Search
        </button>
      </div>
    </>
  );
}
