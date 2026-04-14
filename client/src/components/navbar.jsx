import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-[#0f172a] text-gray-300">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

                {/* Logo */}
                <h1 className="text-white font-bold text-lg">Shohaab</h1>

                {/* Desktop Links */}
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#tech">TechStack</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#certifications">Certifications</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

                {/* Hamburger Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Desktop Icons */}
                <div className="hidden md:flex space-x-4">
                    {/* GitHub */}
                    <a
                        href="https://github.com/Shohaab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.2 1.8 1.2 1.04 1.8 2.74 1.28 3.41.98.1-.75.4-1.28.73-1.57-2.55-.3-5.24-1.28-5.24-5.68 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.5.11-3.12 0 0 .98-.31 3.2 1.18a11.1 11.1 0 015.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.62.23 2.82.11 3.12.75.8 1.2 1.82 1.2 3.07 0 4.41-2.7 5.38-5.27 5.67.41.36.77 1.08.77 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56A11.52 11.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/shohaab-aslam-b33211279"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#0A66C2] transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.1 108 0 83.9 0 54.2A54.2 54.2 0 0 1 108.4 54.2c0 29.7-24.1 53.8-54.56 53.8zM447.9 448h-92.4V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.7V448h-92.4V148.9h88.7v40.8h1.3c12.4-23.5 42.6-48.3 87.6-48.3 93.7 0 111 61.7 111 141.9V448z" />
                        </svg>
                    </a>
                </div>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#0f172a] px-6 pb-4 space-y-4">
                    <a href="#home" onClick={() => setMenuOpen(false)} className="block">Home</a>
                    <a href="#about" onClick={() => setMenuOpen(false)} className="block">About</a>
                    <a href="#tech" onClick={() => setMenuOpen(false)} className="block">TechStack</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)} className="block">Projects</a>
                    <a href="#certifications" onClick={() => setMenuOpen(false)} className="block">Certifications</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)} className="block">Contact</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;