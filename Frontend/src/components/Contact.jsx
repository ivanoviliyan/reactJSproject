import React from "react";
import ContactForm from "./ContactMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
    return (
        <section className="flex my-12 w-full justify-center gap-15">
            <section className="bg-third p-8 rounded-lg shadow-secondary w-1/3">
                <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
                <p className="mb-6">
                    Feel free to reach out to us through our social media or visit us at our
                    location.
                </p>

                <div className="flex flex-col gap-4 justify-center ">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tranform-main shadow-secondary bg-fb text-white"
                    >
                        <div className="flex justify-between items-center">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <p>Facebook</p>
                            <FontAwesomeIcon icon={faUpRightFromSquare} />
                        </div>
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tranform-main shadow-secondary bg-ig text-white"
                    >
                        <div className="flex justify-between items-center">
                            <FontAwesomeIcon icon={faInstagram} />
                            <p>Instagram</p>
                            <FontAwesomeIcon icon={faUpRightFromSquare} />
                        </div>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tranform-main shadow-secondary bg-x text-white"
                    >
                        <div className="flex justify-between items-center">
                            <FontAwesomeIcon icon={faXTwitter} />
                            <p>X</p>
                            <FontAwesomeIcon icon={faUpRightFromSquare} />
                        </div>
                    </a>
                    <section className="shadow-secondary rounded-lg">
                        <div className="flex justify-center items-center flex-col bg-third p-3 rounded-lg">
                            <p>Adress:</p> <p>123 Bar Street, City, Country</p>
                        </div>
                        <div className="mt-4">
                            <iframe
                                className="w-full max-w-lg h-64 mx-auto rounded-lg shadow-lg"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093365!2d144.95592831531666!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577e0f8fbbb7e4d!2sYour%20Bar!5e0!3m2!1sen!2sus!4v1612345678901!5m2!1sen!2sus"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </section>
                </div>
            </section>
            <ContactForm />
        </section>
    );
}
