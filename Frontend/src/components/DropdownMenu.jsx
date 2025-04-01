import React, { use, useState } from "react";

export default function DropdownMenu(props) {
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
        <select
            className={
                props.className
                    ? `${props.className} bg-third tranform-main rounded-lg text-sm px-5 py-3.5`
                    : "bg-secondary tranform-main rounded-lg text-sm px-5 py-3.5"
            }
            onChange={(e) => setSelectedOption(e.target.value)}
            value={selectedOption}
            type={props.name}
            name={props.name}
        >
            {options.map((option) => (
                <option
                    key={option}
                    value={option}
                    className={
                        props.className
                            ? `${props.className} bg-third tranform-main rounded-lg text-sm px-5 py-3.5`
                            : "bg-secondary tranform-main rounded-lg text-sm px-5 py-3.5"
                    }
                >
                    {option}
                </option>
            ))}
        </select>
    );
}
