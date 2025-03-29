import React from "react";
import logo from "../../public/images/logo.png";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center text-center animate-fadeIn">
            <img src={logo} alt="logo" className="w-55 my-4 shadow-lg rounded-full" />
            <h2 className="text-3xl font-bold mb-1">Welcome to Our Bar!</h2>
            <p className="text-lg">
                Refreshing drinks, cozy atmosphere, and excellent service. <br /> Place your order
                now!
            </p>

            <p className="mt-5 text-xl font-semibold">Start Ordering Now</p>

            <div className="mb-1 mt-0 flex flex-col">
                <h2 className="text-xl font-semibold mb-4 text-primary">Our Specialties</h2>
                <div className="flex gap-3.5 font-semibold text-xl flex-col w-80">
                    <div className="p-3 bg-cocktail rounded-lg shadow-secondary hover:ring hover:cursor-pointer transform-main">
                        🍹 Cocktails
                    </div>
                    <div className="p-3 bg-beer rounded-lg shadow-secondary hover:ring hover:cursor-pointer transform-main">
                        🍺 Beers
                    </div>
                    <div className="p-3 bg-drink rounded-lg shadow-secondary hover:ring hover:cursor-pointer transform-main">
                        🥤 Non-Alcoholic
                    </div>
                    <div className="p-3 text-white bg-coffee rounded-lg shadow-secondary hover:ring hover:cursor-pointer transform-main">
                        ☕ Coffee
                    </div>
                    <div className="p-3 bg-tea rounded-lg shadow-secondary hover:ring hover:cursor-pointer transform-main">
                        🍵 Tea
                    </div>
                </div>
            </div>

            <div className="mt-7 mb-5 shadow-secondary bg-third py-7 w-2/3 rounded-2xl">
                <h2 className="text-xl font-semibold mb-4">Our Opening Hours</h2>
                <ul className="text-lg">
                    <li>Monday - Friday: 10:00 AM - 12:00 AM</li>
                    <li>Saturday: 11:00 AM - 2:00 AM</li>
                    <li>Sunday: Closed</li>
                </ul>
            </div>
        </div>
    );
}
