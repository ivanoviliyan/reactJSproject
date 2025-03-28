import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faCompass,
    faCircleInfo,
    faAddressBook,
    faArrowRight,
    faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <nav className="bg-third py-5 px-2.5 shadow-secondary fixed top-0 left-0 w-full">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-semibold">
                    <a href="/">Small Bar</a>
                </div>
                <ul className="flex space-x-6 text-lg">
                    <li className="tranform-main">
                        <a href="/">
                            {" "}
                            <FontAwesomeIcon icon={faHouse} /> Home
                        </a>
                    </li>
                    <li className="tranform-main">
                        <a href="/menu">
                            <FontAwesomeIcon icon={faCompass} /> Menu
                        </a>
                    </li>
                    <li className="tranform-main">
                        <a href="/about">
                            <FontAwesomeIcon icon={faCircleInfo} /> About Us
                        </a>
                    </li>
                    <li className="tranform-main">
                        <a href="/contact">
                            <FontAwesomeIcon icon={faAddressBook} /> Contact
                        </a>
                    </li>
                    <li className="tranform-main">
                        <a href="/order">
                            <FontAwesomeIcon icon={faArrowRight} /> Order Now
                        </a>
                    </li>
                </ul>
                <div className="flex justify-end items-center text-lg">
                    <button className="tranform-main">Login</button>
                    <button className="tranform-main">Register</button>
                    <button className="tranform-main">Logout</button>
                </div>
            </div>
        </nav>
    );
}
