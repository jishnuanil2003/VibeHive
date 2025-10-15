import React, { useState } from "react";
import { GiCampingTent } from "react-icons/gi";
import { GiLotus } from "react-icons/gi";
import { GiMountains } from "react-icons/gi";
import { FaHotel, FaUmbrellaBeach } from "react-icons/fa";


const WhyUsSection = () => {
    const[click,setClick] = useState(false)
  const features = [
    {
      icon: <GiCampingTent className="text-5xl text-yellow-400 mb-4" />,
      title: "Luxury Accomodation",
      description:
        "Orci aliquam fringilla tellus aliquam turpis porta massa sollicitudin sed non risus quis leo sit enim ut nunc integer orci elit.",
    },
    {
      icon: <GiLotus className="text-5xl text-yellow-400 mb-4" />,
      title: "Wellness & Spa",
      description:
        "In purus cursus varius velit sit aenean et et laoreet tortor scelerisque tortor pharetra velit sed in sed sed ultricies.",
    },
    {
      icon: <GiMountains className="text-5xl text-yellow-400 mb-4" />,
      title: "Adventure activities",
      description:
        "Lorem ipsum dolor sit amet consectetur nullam consectetur turpis consectetur mattis fames sit eu tempus molestie.",
    },
  ];
  const Location = [
    {
      icon: <GiCampingTent className="text-5xl text-yellow-400 mb-4" />,
      title: "Munnar",
      description:
        "Orci aliquam fringilla tellus aliquam turpis porta massa sollicitudin sed non risus quis leo sit enim ut nunc integer orci elit.",
    },
    {
      icon: <FaUmbrellaBeach className="text-5xl text-yellow-400 mb-4" />,
      title: "Trivandrum",
      description:
        "In purus cursus varius velit sit aenean et et laoreet tortor scelerisque tortor pharetra velit sed in sed sed ultricies.",
    },
    {
      icon: <FaHotel className="text-5xl text-yellow-400 mb-4" />,
      title: "Fort Kochi",
      description:
        "Lorem ipsum dolor sit amet consectetur nullam consectetur turpis consectetur mattis fames sit eu tempus molestie.",
    },
  ];
  const HandleLocation = ()=>{
    setClick(true)
  }
  const HandleCamp = ()=>{
    setClick(false)
  }
  return (
    <section id="services" className="bg-black text-white py-20 px-10 md:px-20 relative">
      {/* Glass Container */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40 backdrop-blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="text-yellow-400 text-sm font-semibold mb-2">Why us?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Why staying with VibeHive ?
        </h2>

        {/* Buttons */}
        <div className="flex space-x-4 mb-12">
          <button className={click ?("md:px-6 px-4 md:py-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white md:font-semibold font-medium rounded-full hover:bg-white/20 transition"):("md:px-6 px-4 md:py-3 py-2 bg-yellow-400 text-black md:font-semibold font-medium rounded-full hover:bg-yellow-500 transition")} onClick={HandleCamp}>
            Browse Service
          </button>
          <button className={click ?("md:px-6 px-4 md:py-3 py-2 bg-yellow-400 text-black md:font-semibold font-medium rounded-full hover:bg-yellow-500 transition"):("md:px-6 px-4 md:py-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white md:font-semibold font-medium rounded-full hover:bg-white/20 transition")} onClick={HandleLocation}>
            Browse Location
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {click
    ? Location.map((item, index) => (
        <div
          key={index}
          className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition"
        >
          {item.icon}
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-300 text-sm">{item.description}</p>
        </div>
      ))
    : features.map((item, index) => (
        <div
          key={index}
          className="p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 transition"
        >
          {item.icon}
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-300 text-sm">{item.description}</p>
        </div>
      ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;