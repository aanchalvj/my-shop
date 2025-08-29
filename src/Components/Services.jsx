import React from 'react';
import s1 from "../assets/pump installation.jpg"; // ✅ Import service images
import s2 from "../assets/motor repair.jpg";
import s3 from "../assets/pipe fitting.jpg";
import s4 from "../assets/electrical wiring.jpg";

export default function Services() {
  //  Array of service objects
  const services = [
    {
      id: 1,
      title: "Pump Installation",
      description: "Expert pump installation for farms and homes.",
      image: s1,
      price: "Starting from ₹1,500",
    },
    {
      id: 2,
      title: "Motor Repair",
      description: "Quick and reliable repair for all motor types.",
      image: s2,
      price: "Starting from ₹500",
    },
    {
      id: 3,
      title: "Pipe Fitting",
      description: "Professional pipe fitting for agricultural and domestic needs.",
      image: s3,
      price: "Custom pricing",
    },
    {
      id: 4,
      title: "Electrical Wiring",
      description: "Safe and secure electrical wiring services.",
      image: s4,
      price: "Starting from ₹2,000",
    },
  ];

  return (
    <div className=" bg-black py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-6 font-serif">Our Services</h1>

      {/* Mapping and rendering service cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-60 object-cover rounded-md mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-600 mb-2">{service.description}</p>
            <p className="text-orange-500 font-bold">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
