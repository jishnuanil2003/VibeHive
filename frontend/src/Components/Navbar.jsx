import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`flex fixed top-0 left-0 right-0 z-50 justify-between items-center px-10 py-6 transition-all duration-500 ${
        scrolled ? "bg-white backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold">🏕️</span>
        <Link to='/'>
        <h1
          className={
            scrolled
              ? "text-xl font-semibold text-black"
              : "text-xl font-semibold text-white"
          }
        >
          VibeHive
        </h1>
        </Link>
      </div>

      {/* Desktop Menu */}
      <nav
        className={`hidden md:flex items-center space-x-6 text-sm font-medium ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        <a href="#home" className="hover:text-yellow-400">
          Home
        </a>
        <a href="#services" className="hover:text-yellow-400">
          Service
        </a>
        <a href="#gallery" className="hover:text-yellow-400">
          Gallery
        </a>
        <a href="#contact" className="hover:text-yellow-400">
          Contact
        </a>
        <button
          className={`ml-3 px-5 py-2 rounded-full font-semibold transition ${
            scrolled
              ? "bg-black text-white hover:bg-yellow-400"
              : "bg-white text-black hover:bg-yellow-400 hover:text-white"
          }`}
        >
          <Link to='/booking'>Book Now</Link>
        </button>
      </nav>

      {/* Hamburger Icon */}
      <button
        className={`md:hidden text-3xl focus:outline-none ${
          scrolled ? "text-black" : "text-white"
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 z-50 text-white text-xl font-medium">
        <button className="fixed top-10 right-10" onClick={()=> setMenuOpen(false)}>X</button>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Service
          </a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            <Link to='/booking'>Book Now</Link>
          </button>
        </div>
        </>
      )}
    </header>
  );
};

export default Navbar;