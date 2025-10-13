import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`flex fixed top-0 left-0 right-0 z-100 justify-between items-center px-10 py-6 transition-all duration-500 ${
      scrolled ? "bg-white backdrop-blur-md" : "bg-transparent"
    }`}>
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold">🏕️</span>
          <h1 className={ scrolled? ("text-xl font-semibold text-black"):("text-xl font-semibold")}>VibeHive</h1>
        </div>
        <nav className={scrolled?("flex items-center space-x-6 text-sm text-black font-medium"):("flex items-center space-x-6 text-sm font-medium")}>
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#services" className="hover:text-yellow-400">Service</a>
          <a href="#gallery" className="hover:text-yellow-400">Gallery ▾</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
          <button className={scrolled?("ml-3 px-5 py-2 bg-black text-white rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition"):("ml-3 px-5 py-2 bg-white text-black rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition")}>
            Reserve now
          </button>
        </nav>
      </header>

  )
}

export default Navbar
