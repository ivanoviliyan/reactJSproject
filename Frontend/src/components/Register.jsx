import React, { useState } from "react";
import Message from "./Message";

import { useFormStatus } from "react-dom";

export default function Register() {
    const { pending } = useFormStatus();
    const [isError, setIsError] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const showMessage = (err) => {
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
            showMessage("Passwords does not match!");
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

            if (!response.ok) showMessage("Failed to register user.");

            showMessage("You have been registered!");
        } catch (error) {
            showMessage(error);
        }
    };

    return (
        <>
            <form
                className=" bg-forth w-full flex flex-col gap-4 items-center"
                action={registerAction}
            >
                <section className="flex flex-col gap-4 items-center bg-third w-3/5 p-10 mt-12 rounded-lg shadow-secondary">
                    <div>{isError && <Message message={errMsg} />}</div>
                    <h1 className="text-4xl mb-5">Registration</h1>

                    <div>
                        <label className="text-md" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="min-w-60 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="text-md" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="min-w-60 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div>
                        <label className="text-md" htmlFor="confirm-password">
                            Confirm Password:
                        </label>
                        <input
                            className="min-w-60 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                        />
                    </div>

                    <div>
                        <p className="mt-7">You have already accont? Please log in here.</p>
                    </div>

                    <div className="w-full flex justify-center mt-10">
                        <button
                            type="submit"
                            className="tranform-main py-3 w-2/5 bg-secondary"
                            disabled={pending}
                        >
                            Register
                        </button>
                    </div>
                </section>
            </form>
        </>
    );
}
