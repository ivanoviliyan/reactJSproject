import React from "react";
import logo from "../../public/images/logo.png";
import { Link } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
    const { user, setUser } = useContext(AuthContext);
    return (
        <div className="flex flex-col items-center justify-center text-center animate-fadeIn">
            <img src={logo} alt="logo" className="w-55 mb-4 shadow-lg rounded-full" />
            {!user ? (
                <p className="underline">Please login to use ordering functionallity</p>
            ) : null}
            <Link
                to={user ? "/catalog" : "users/login"}
                className="mt-5 p-4 bg-secondary rounded-xl tranform-main text-xl font-semibold"
            >
                Start Ordering Now
            </Link>

            <div className="mt-7 mb-5 shadow-secondary bg-third py-7 w-2/3 rounded-2xl">
                <h2 className="text-xl font-semibold mb-4">Opening Hours</h2>
                <ul className="text-lg">
                    <li>Monday - Friday: 10:00 AM - 12:00 AM</li>
                    <li>Saturday: 11:00 AM - 2:00 AM</li>
                    <li>Sunday: Closed</li>
                </ul>
            </div>
        </div>
    );
}
