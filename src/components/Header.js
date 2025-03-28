import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaUser, FaProjectDiagram, FaCode, FaEnvelope, FaBars, FaTimes, FaHome } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full shadow-md z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-6">
                {/* Logo */}
                <h1 className="text-2xl font-semibold text-white">Michael Jhon</h1>

                {/* Desktop Navigation - Hidden on small screens */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link to="hero" smooth={true} duration={500} className="flex items-center space-x-2 text-white hover:text-blue-600 transition duration-300 cursor-pointer">
                            <FaHome /> <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} duration={500} className="flex items-center space-x-2 text-white hover:text-blue-600 transition duration-300 cursor-pointer">
                            <FaUser /> <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} className="flex items-center space-x-2 text-white hover:text-blue-600 transition duration-300 cursor-pointer">
                            <FaProjectDiagram /> <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} className="flex items-center space-x-2 text-white hover:text-blue-600 transition duration-300 cursor-pointer">
                            <FaCode /> <span>Skills</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} className="flex items-center space-x-2 text-white hover:text-blue-600 transition duration-300 cursor-pointer">
                            <FaEnvelope /> <span>Contact</span>
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button - Visible on small screens */}
                <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu - Shown when menuOpen is true */}
            {menuOpen && (
                <div className="md:hidden absolute top-16 right-4 w-48 bg-black bg-opacity-70 shadow-lg rounded-lg flex flex-col items-start space-y-4 p-4">
                    <Link
                        to="hero"
                        smooth={true}
                        duration={500}
                        className="flex items-center space-x-2 text-white hover:text-blue-600 transition duration-300 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaHome /> <span>Home</span>
                    </Link>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="flex items-center space-x-2 text-white hover:text-blue-600 transition duration-300 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaUser /> <span>About</span>
                    </Link>
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="flex items-center space-x-2 text-white hover:text-blue-600 transition duration-300 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaProjectDiagram /> <span>Projects</span>
                    </Link>
                    <Link
                        to="skills"
                        smooth={true}
                        duration={500}
                        className="flex items-center space-x-2 text-white hover:text-blue-600 transition duration-300 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaCode /> <span>Skills</span>
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="flex items-center space-x-2 text-white hover:text-blue-600 transition duration-300 cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FaEnvelope /> <span>Contact</span>
                    </Link>
                </div>
            )}

        </nav>
    );
};

export default Header;
