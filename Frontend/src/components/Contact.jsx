import React from "react";
import ContactForm from "./ContactForm";
import logo from "../../public/images/logo.png";

import ContactUs from "./ContactUs";

export default function Contact() {
    return (
        <section className="w-full flex flex-col justify-center items-center">
            <img src={logo} alt="logo" className="w-55 my-4 shadow-lg rounded-full" />
            <section className="flex my-3 w-full justify-center gap-7">
                <ContactUs />
                <ContactForm />
            </section>
        </section>
    );
}
