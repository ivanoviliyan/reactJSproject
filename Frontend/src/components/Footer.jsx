import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <>
            <footer className="bg-third text-center fixed bottom-0 left-0 w-full py-5 shadow-secondary text-lg">
                <p>&copy; {new Date().getFullYear()} Bar Escape. All rights reserved.</p>
                <div className="mt-2 flex justify-center space-x-4 text-3xl">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tranform-main"
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tranform-main"
                    >
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tranform-main"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tranform-main"
                    >
                        <FontAwesomeIcon icon={faLocationDot} />
                    </a>
                </div>
            </footer>
        </>
    );
}
