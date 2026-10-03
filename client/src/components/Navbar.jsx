import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center border mx-4 max-md:w-full max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-white text-sm mt-4">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <MapPin className="text-white" size={24} />
        <span className="text-lg font-bold">ReloAI</span>
      </Link>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-6 ml-7">
        <Link to="/" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Home
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Home
          </span>
        </Link>
        <Link to="/search" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Search
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Search
          </span>
        </Link>
        <Link to="/map" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Map
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Map
          </span>
        </Link>
        <Link to="/dashboard" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Dashboard
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Dashboard
          </span>
        </Link>
      </div>

      {/* Desktop Login & Register Buttons */}
      <div className="hidden ml-auto md:flex items-center gap-4">
        <Link
          to="/login"
          className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-300"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute md:hidden top-20 left-0 bg-gray-950 border border-slate-700 rounded-2xl mx-4 w-[calc(100%-2rem)] flex flex-col items-center gap-4 py-6 z-50">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-indigo-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/search"
            onClick={() => setIsOpen(false)}
            className="hover:text-indigo-400 transition-colors"
          >
            Search
          </Link>
          <Link
            to="/map"
            onClick={() => setIsOpen(false)}
            className="hover:text-indigo-400 transition-colors"
          >
            Map
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className="hover:text-indigo-400 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
