import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <section id="." className="relative h-screen bg-cover bg-center text-white" style={{
    backgroundImage:
      "url('/src/assets/house-with-pool-palm-tree-background.jpg')",
  }}>
      {/* Overlay */}

      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Navbar */}

      <Navbar/>

      {/* Hero Content */}
      
      <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-20 lg:w-1/2">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Find your perfect <br />
          <span className="text-yellow-400">glamping</span> destination
        </h2>
        <p className="text-gray-200 mb-6 max-w-md">
          Lorem ipsum dolor sit amet consectetur sollicitudin risus ultrices
          turpis justo maecenas faucibus non in non donec tellus turpis.
        </p>
        <button className="px-6 py-3 bg-white text-black rounded-full font-semibold w-fit hover:bg-yellow-400 hover:text-white transition">
          <Link to='/booking'>Book Now</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;