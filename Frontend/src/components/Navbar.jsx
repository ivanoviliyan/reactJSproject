import React from "react";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faTag,
    faCircleInfo,
    faAddressBook,
    faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const navigation = [
    { name: "Home", path: "/", icon: faHouse, showToLoggedUser: true },
    { name: "Catalog", path: "/catalog", icon: faTag, showToLoggedUser: false },
    { name: "About", path: "/about", icon: faCircleInfo, showToLoggedUser: true },
    {
        name: "Contacts",
        path: "/contacts",
        icon: faAddressBook,
        showToLoggedUser: true,
    },
    {
        name: "Manage",
        path: "/crud",
        icon: faListCheck,
        showToLoggedUser: false,
    },
];

export default function Navbar() {
    const { user, setUser } = useContext(AuthContext);
    console.log(user);
    const display = user ? true : false;
    const navigation = [
        { name: "Home", path: "/", icon: faHouse, showToLoggedUser: true },
        { name: "Catalog", path: "/catalog", icon: faTag, showToLoggedUser: display },
        { name: "About", path: "/about", icon: faCircleInfo, showToLoggedUser: true },
        {
            name: "Contacts",
            path: "/contacts",
            icon: faAddressBook,
            showToLoggedUser: true,
        },
        {
            name: "Manage",
            path: "/crud",
            icon: faListCheck,
            showToLoggedUser: display,
        },
    ];
    const logoutHandler = async () => {
        if (!user) return;
        try {
            const response = await fetch("http://localhost:3030/users/logout", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-Authorization": localStorage.getItem("accessToken"),
                },
            });

            setUser(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <nav className="bg-third py-5 px-2.5 shadow-secondary fixed top-0 left-0 w-full z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="text-2xl font-semibold">
                    <Link to={"/"}>Bar Escape</Link>
                </div>
                <ul className="flex space-x-2 text-lg">
                    {navigation.map((item) => {
                        return (
                            item.showToLoggedUser && (
                                <li className="tranform-main" key={item.path}>
                                    <Link to={item.path}>
                                        {<FontAwesomeIcon icon={item.icon} />} {item.name}
                                    </Link>
                                </li>
                            )
                        );
                    })}
                </ul>

                <div className="flex justify-end items-center text-lg space-x-2">
                    {!user ? (
                        <>
                            <Link to={"/users/login"} className="tranform-main">
                                Login
                            </Link>
                            <Link to={"/users/register"} className="tranform-main">
                                Register
                            </Link>
                        </>
                    ) : (
                        <Link to={"/"} className="tranform-main" onClick={logoutHandler}>
                            Logout
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}
