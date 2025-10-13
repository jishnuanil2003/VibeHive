import React from "react";
import Resort1 from '../assets/Resort1.jpg'
import Resort2 from '../assets/Resort2.jpg'
import Resort3 from '../assets/Resort3.jpg'
import Resort4 from '../assets/Resort4.jpg'
const Gallery = () => {

  return (
    <section id="gallery" className="bg-black text-white py-20 px-10 md:px-20 relative">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/50 backdrop-blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto  mb-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h2>
        <p className="text-gray-300 max-w-2xl">
          Explore stunning views and moments from our resorts around the world.
        </p>
      </div>
      
    <div className="relative py-12 bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-800/70">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div className="col-span-2 row-span-2 overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:scale-102 transform transition duration-500">
          <img
            src={Resort1}
            alt="Gallery 1"
            className="w-full h-full object-fill"
          />
        </div>

        <div className="col-span-1 overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:scale-102 transform transition duration-500">
          <img
            src={Resort2}
            alt="Gallery 2"
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="col-span-1 overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:scale-102 transform transition duration-500">
          <img
            src={Resort3}
            alt="Gallery 3"
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="col-span-2 overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:scale-102 transform transition duration-500">
          <img
            src={Resort4}
            alt="Gallery 4"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </div>

</section>
  );
};

export default Gallery;