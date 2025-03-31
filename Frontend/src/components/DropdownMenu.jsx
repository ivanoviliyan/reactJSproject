import React, { useState } from "react";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Drink type");

  const options = ["Alcohol", "Non-alcohol", "Cocktails", "Coffee", "Tea"];

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={toggleDropdown}
        className="bg-secondary tranform-main rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center"
        type="button"
      >
        {selectedOption}
        <svg
          className={`w-2.5 h-2.5 ms-3 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 rounded-lg shadow-primary w-44 bg-secondary tranform-main">
          <ul className="py-2 text-sm">
            {options.map((option) => (
              <li key={option}>
                <button
                  onClick={() => handleSelect(option)}
                  className="w-full text-left block px-4 py-2 hover:bg-third cursor-pointer rounded-xl"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
