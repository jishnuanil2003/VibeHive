import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const[email,setEmail] = useState('')
  return (
    <footer id="contact" className="bg-[#0e2d23] text-white py-16 px-10 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/20 pb-10 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-6 md:mb-0">
          Experience nature in <br className="md:hidden" /> a new way.{" "}
          <span className="text-yellow-400">Visit us.</span>
        </h2>

        {/* Newsletter */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex items-center border border-white rounded-full overflow-hidden w-[280px] md:w-[350px]">
            <input onChange={(e)=>setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email address"
              className="flex-grow px-4 py-2 text-white focus:outline-none"
            />
            <button className="bg-[#0e2d23] text-white px-5 py-2 font-semibold hover:bg-yellow-400 hover:text-black transition">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-lg text-gray-300">
            <a href="#" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-300">
        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">🏕️ VibeHive</h3>
          <p className="text-sm mb-4">Copyright © VibeHive</p>
          <button className="px-5 py-2 bg-white text-black rounded-full font-semibold hover:bg-yellow-400 hover:text-white transition">
            Book Now
          </button>
        </div>

        {/* Main Pages */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Main pages</h4>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Service</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;