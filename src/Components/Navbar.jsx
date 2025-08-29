import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="  fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="bg-black/50 backdrop-blur-sm shadow-lg rounded-full px-3 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-sm lg:text-2xl font-bold text-white"
          >
            <img
              src={logo}
              alt="DP Logo"
              className="w-20 h-10 object-contain"
            />
            DP Electric & Machinery Store
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-white hover:text-orange-500 font-semibold transition"
            >
              Home
            </Link>
            <Link
              to="/About"
              className="text-white hover:text-orange-500 font-semibold transition"
            >
              About
            </Link>
            {/* <Link
              to="/Portfolio"
              className="text-white hover:text-orange-500 font-semibold transition"
            >
             Portfolio
            </Link> */}
            <Link
              to="/Products"
              className="text-white hover:text-orange-500 font-semibold transition"
            >
              Products
            </Link>
            <Link
              to="/Services"
              className="text-white hover:text-orange-500 font-semibold transition"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-orange-500 font-semibold transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl focus:outline-none transition"
              aria-label="Toggle menu"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-60 mt-3" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center gap-3 pt-3">
            <Link
              to="/"
              className="text-white hover:text-orange-500 font-semibold transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/About"
              className="text-white hover:text-orange-500 font-semibold transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            {/* <Link
              to="/Portfolio"
              className="text-white hover:text-orange-500 font-semibold transition"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link> */}
             <Link
              to="/Products"
              className="text-white hover:text-orange-500 font-semibold transition"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
             <Link
              to="/Services"
              className="text-white hover:text-orange-500 font-semibold transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/Contact"
              className="text-white hover:text-orange-500 font-semibold transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
