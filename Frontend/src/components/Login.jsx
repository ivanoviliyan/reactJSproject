import React, { useState } from "react";
import Message from "./Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUpRightFromSquare,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

import { useFormStatus } from "react-dom";
import logo from "../../public/images/logo.png";

export default function Login() {
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

  const loginAction = async (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("http://localhost:3030/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) showMessage("Failed to login user.");

      const responseData = await response.json();
      localStorage.setItem("username", responseData.username);
      localStorage.setItem("email", responseData.email);
      localStorage.setItem("id", responseData._id);
      localStorage.setItem("accessToken", responseData.accessToken);

      showMessage("You have been logged in!");
    } catch (error) {
      showMessage(error);
    }
  };

  return (
    <>
      <form
        className="bg-primary w-250 pb-10 flex flex-col items-center mx-auto"
        action={loginAction}
      >
        <section className="flex flex-col gap-4 items-center bg-third w-3/5 pt-1 rounded-lg text-lg shadow-secondary">
          <div>{isError && <Message message={errMsg} />}</div>
          <div className="flex flex-col gap-5 items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="w-30 shadow-lg rounded-full"
            />
            <h1 className="text-4xl e mb-5">Login</h1>
          </div>

          <div>
            <label className="font-semibold" htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} /> Email:
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
            <label className="font-semibold" htmlFor="password">
              <FontAwesomeIcon icon={faLock} /> Password:
            </label>
            <input
              className="min-w-60 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <p className="mt-7">
              You don't have accont? Please sing in here{" "}
              <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" />.
            </p>
          </div>

          <div className="w-full flex justify-center mt-10">
            <button
              type="submit"
              className="tranform-main py-3 w-2/5 bg-secondary mb-5"
              disabled={pending}
            >
              <FontAwesomeIcon icon={faRightToBracket} /> Login
            </button>
          </div>
        </section>
      </form>
    </>
  );
}
