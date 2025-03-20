import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="bg-secondary text-white py-4 text-center">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <div className="mt-2 flex justify-center space-x-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400"
                    >
                        LinkedIn
                    </a>
                </div>
            </footer>
        </>
    );
}
