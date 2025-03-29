import React from "react";

export default function ContactForm() {
    return (
        <div className="w-1/3 h-max p-6 bg-third rounded-lg shadow-secondary flex flex-col">
            <h1 className="text-3xl font-bold mb-4 text-center">Contact Form</h1>
            <form>
                <p className="text-md font-semibold mb-4 text-center">
                    You could use that form to contact with us via Email.
                </p>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-2 border rounded-lg text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-2 border rounded-lg text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-full p-2 border rounded-lg text-black"
                        required
                    ></textarea>
                </div>
                <div className="flex w-full justify-center">
                    <button
                        type="submit"
                        className="bg-secondary px-4 py-2 rounded-lg tranform-main shadow-secondary w-1/3"
                    >
                        Send an Email
                    </button>
                </div>
            </form>
        </div>
    );
}
