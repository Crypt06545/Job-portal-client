import { useState } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ThemeProvider>
      <div className="sticky top-0 z-50 backdrop-blur-sm bg-white bg-opacity-5">
        <div className="w-11/12 mx-auto py-3 flex justify-between items-center">
          {/* Logo and Name */}
          <div className="flex gap-2 items-center">
            <img src={Logo} alt="Logo" />
            <span className="text-2xl font-bold">Carrer.</span>
          </div>

          {/* Navbar Links (Desktop) */}
          <div className="hidden lg:flex space-x-5 font-medium">
            <NavLink
              to="/"
              className="text-[#574F4A] hover:text-black transition-colors duration-300"
            >
              All Jobs
            </NavLink>
            <NavLink
              to="/career"
              className="text-[#574F4A] hover:text-black transition-colors duration-300"
            >
              Add Job
            </NavLink>
            <NavLink
              to="/about"
              className="text-[#574F4A] hover:text-black transition-colors duration-300"
            >
              My Application
            </NavLink>
          </div>

          {/* Theme Toggle, Sign In, and Sign Up buttons */}
          <div className="hidden lg:flex gap-2 items-center">
            <ThemeToggle />
            <button className="btn bg-black text-white">Sign In</button>
            <button className="btn bg-black text-white">Sign Up</button>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden flex items-center ">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className="text-[#574F4A] text-2xl" />
              ) : (
                <FaBars className="text-[#574F4A] text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden flex flex-col items-center mt-4 space-y-4 bg-gray-100 p-4 rounded-lg">
            <NavLink
              to="/"
              className="text-[#574F4A] hover:text-black transition-colors duration-300"
              onClick={toggleMenu}
            >
              All Jobs
            </NavLink>
            <NavLink
              to="/career"
              className="text-[#574F4A] hover:text-black transition-colors duration-300"
              onClick={toggleMenu}
            >
              Add Job
            </NavLink>
            <NavLink
              to="/about"
              className="text-[#574F4A] hover:text-black transition-colors duration-300"
              onClick={toggleMenu}
            >
              My Application
            </NavLink>
            <div className="flex gap-2 mt-4">
              <ThemeToggle />
              <button className="btn bg-black text-white">Sign In</button>
              <button className="btn bg-black text-white">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
