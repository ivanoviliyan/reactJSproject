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
                <section className="registration">
                    <div>{isError && <ErrorMessage message={errMsg} />}</div>
                    <h1>Register</h1>
                    <div className="email">
                        <label htmlFor="email">Email:</label>
                        <input required type="text" name="email" />
                    </div>

                    <div className="password">
                        <label htmlFor="password">Password:</label>
                        <input required type="password" name="password" />
                    </div>

                    <div className="confirm-password">
                        <label htmlFor="confirm-password">Confirm password:</label>
                        <input required type="password" name="confirmPassword" />
                    </div>

                    <button disabled={pending} className="register-btn">
                        Register
                    </button>
                </section>
            </form>
        </>
    );
}
