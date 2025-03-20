import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-secondary p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-third text-2xl font-semibold">
          <a href="/">Small Bar</a>
        </div>
        <ul className="flex space-x-6 gap-5">
          <li className="tranform-main">
            <a href="/">
              Home
            </a>
          </li>
          <li className="tranform-main">
            <a href="/menu">
              Menu
            </a>
          </li>
          <li className="tranform-main">
            <a href="/about">
              About Us
            </a>
          </li>
          <li className="tranform-main">
            <a href="/contact">
              Contact
            </a>
          </li>
          <li className="tranform-main">
            <a href="/order">
              Order Now
            </a>
          </li>
        </ul>
        <div className="flex justify-end items-center">
          <button className="tranform-main">
            Login
          </button>
          <button className="tranform-main">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
