import React, { useState } from "react";
import ErrorMessage from "./Error";

import { useFormStatus } from "react-dom";

export default function Register() {
    const { pending } = useFormStatus();
    const [isError, setIsError] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const showErrorMessage = (err) => {
        setIsError((state) => (state = true));
        setErrMsg((msg) => (msg = err));
        setTimeout(() => {
            setIsError((state) => (state = false));
            setErrMsg((msg) => (msg = ""));
        }, 2500);
    };

    const registerAction = async (formData) => {
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (password !== confirmPassword) {
            showErrorMessage("Passwords does not match!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3030/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) showErrorMessage("Failed to register user.");
        } catch (error) {
            showErrorMessage(error);
        }
    };

    return (
        <>
            <form
                action={registerAction}
                className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
            >
                <section className="registration">
                    <div className="mb-4">{isError && <ErrorMessage message={errMsg} />}</div>
                    <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>

                    <div className="email mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email:
                        </label>
                        <input
                            required
                            type="text"
                            name="email"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="password mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Password:
                        </label>
                        <input
                            required
                            type="password"
                            name="password"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="confirm-password mb-6">
                        <label
                            htmlFor="confirm-password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Confirm password:
                        </label>
                        <input
                            required
                            type="password"
                            name="confirmPassword"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                            placeholder="Confirm your password"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={pending}
                            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Register
                        </button>
                    </div>
                </section>
            </form>
        </>
    );
}
