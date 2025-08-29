import React from "react";
import portfolio1 from "../assets/image.jpg";
import portfolio2 from "../assets/Submersible Pumps.jpg";
import portfolio3 from "../assets/taparia.jpg";
import portfolio4 from "../assets/pipe.png";

export default function Portfolio() {
  return (
    <section className="bg-black py-20 px-6 md:px-20" id="portfolio">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-orange-500 mb-4 font-serif">
          Our Portfolio
        </h2>
        <p className="text-white text-lg max-w-2xl mx-auto mb-12">
          Explore some of the installations, product demos, and satisfied customer work we’ve proudly delivered across the region.
        </p>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <PortfolioCard
            image={portfolio1}
            title="Texmo Motor Installation"
            description="Texmo model installed at a local farm. High efficiency and low maintenance."
          />

          {/* Card 2 */}
          <PortfolioCard
            image={portfolio2}
            title="Submersible Pump Setup"
            description="Pump used in a deep borewell. Powerful water delivery."
          />

          {/* Card 3 */}
          <PortfolioCard
            image={portfolio3}
            title="Taparia Tools Kit"
            description="Complete kit delivered to an industrial unit. Includes pana, screwdrivers, and pliers."
          />

          {/* Card 4 */}
          <PortfolioCard
            image={portfolio4}
            title="Plumbing Pipe Installation"
            description="Installed high-quality plumbing pipes for residential and commercial use."
          />
        </div>
      </div>
    </section>
  );
}

// Reusable card without flip
function PortfolioCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Upper half: image */}
      <div className="h-40 w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Lower half: text */}
      <div className="p-4 text-left h-40 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-orange-600 mb-1">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
}
