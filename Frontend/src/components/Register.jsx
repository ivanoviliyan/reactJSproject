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
            <form action={registerAction}>
                <section className="h-screen flex flex-col gap-4 items-center">
                    <div>{isError && <ErrorMessage message={errMsg} />}</div>
                    <h1 className="text-4xl text-gray-900 dark:text-white mt-12">Register</h1>

                    <div>
                        <label className="text-md text-gray-900 dark:text-white" htmlFor="email">Email:</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required type="email" name="email" placeholder="Enter your email" />
                    </div>

                    <div>
                        <label className="text-md text-gray-900 dark:text-white" htmlFor="password">Password:</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div>
                        <label className="text-md text-gray-900 dark:text-white" htmlFor="confirm-password">Confirm Password:</label>
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                        />
                    </div>

                    <div>
                        <button type="submit" className="cursor-pointer bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300" disabled={pending}>
                            Register
                        </button>
                    </div>
                </section>
            </form>
        </>
    );
}
