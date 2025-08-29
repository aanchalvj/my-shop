import React from 'react';
import monoblockImg from "../assets/monoblock.jpg"; // ✅ Import image from assets
import p2 from "../assets/Submersible.jpg";
import p3 from "../assets/Tools.jpg";
import p4 from "../assets/pipes.jpg";
import p5 from "../assets/Reaper binder.jpg"; 
import p6 from "../assets/Cooler.jpg"; 
import p7 from "../assets/download.jpg";
import p8 from "../assets/Cables.jpg"; // ✅ Import additional images
export default function Products() {
  //  Array of product objects
  const products = [
    {
      id: 1,
      name: "Texmo Motor",
      description: "High efficiency motor for agricultural use.",
      image: monoblockImg,
      price: "₹4,000- 15,000",
    },
    {
      id: 2,
      name: "Submersible Pump",
      description: "Reliable submersible pump for deep borewells.",
      image: p2,
      price: "₹8,000-20,000",
    },
    {
      id: 3,
      name: "Taparia Tools",
      description: "Durable hand tools for various applications.",
      image: p3,
      price: "₹500",
    },
    {
      id: 4,
      name: "Pipes",
      description: "High-quality pipe fittings for plumbing needs.",
      image: p4,
      price: "₹200-1000",
    },
     {
      id: 5,
      name: "Reaper Binding",
      description: "High efficiency motor for agricultural use.",
      image: p5,
      price: "₹5,00,000",
    },
    {
      id: 6,
      name: "Cooler",
      description: "Reliable submersible pump for deep borewells.",
      image: p6,
      price: "₹5,000-15000",
    },
    {
      id: 7,
      name: "Sample pipes",
      description: "Durable hand tools for various applications.",
      image: p7,
      price: "₹1,000-5,000",
    },
    {
      id: 8,
      name: "Cables",
      description: "High-quality pipe fittings for plumbing needs.",
      image: p8,
      price: "₹4,000-10,000",
    },
  ];

  return (
    <div className="  bg-black py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-6 font-serif">Our Products</h1>

      {/* Mapping and rendering product cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-orange-500 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
