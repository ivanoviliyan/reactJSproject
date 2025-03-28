import React from "react";

export default function About() {
    return (
        <div className="bg-third my-12 flex flex-col items-center justify-center p-6 shadow-secondary rounded-2xl">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="max-w-2xl text-lg text-justify mb-6">
                Welcome to our bar! We offer a variety of drinks and an amazing atmosphere for you
                to enjoy with friends and family. Come visit us and experience the best service in
                town! Whether you're in the mood for a classic cocktail, a refreshing craft beer, or
                a non-alcoholic delight, we have something for everyone. Our cozy ambiance, friendly
                staff, and carefully curated menu make us the perfect spot for any occasion. Stop by
                and let us serve you a memorable experience!
            </p>
        </div>
    );
}
