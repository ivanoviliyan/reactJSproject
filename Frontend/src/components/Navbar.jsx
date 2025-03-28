import React from "react";
import { useState } from "react";
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
    const logoutHandler = async () => {
        const isUserLogged = localStorage.getItem("accessToken") ? true : false;
        if (!isUserLogged) return;

        try {
            const response = await fetch("http://localhost:3030/users/logout", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": localStorage.getItem("accessToken"),
                },
            });

            localStorage.removeItem("accessToken");
            localStorage.removeItem("username");
            localStorage.removeItem("email");
            localStorage.removeItem("id");
        } catch (error) {
            console.log(error);
        }
        console.log("click", isUserLogged);
    };

    return (
        <nav className="bg-third py-5 px-2.5 shadow-secondary fixed top-0 left-0 w-full">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-semibold">
                    <a href="/">Small Bar</a>
                </div>
                <ul className="flex space-x-2 text-lg">
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
                <div className="flex justify-end items-center text-lg space-x-2">
                    <button className="tranform-main">Login</button>
                    <button className="tranform-main">Register</button>
                    <button className="tranform-main" onClick={logoutHandler}>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}
