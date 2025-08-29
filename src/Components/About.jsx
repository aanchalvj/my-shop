import React from "react";
import dpImage from "../assets/BuildingServices.jpg";
import dpImage1 from "../assets/Solar.jpg";
import dpImage2 from "../assets/foundry.jpg";
import b2b from "../assets/B2B.jpg";
import b2b1 from "../assets/b2b img1.jpg";
import B2B from "../assets/b2b img.jpg";

export default function About() {
  return (
    <>
      {/* === About Section === */}
      <section
        className="bg-black py-20 px-4 sm:px-6 lg:px-20 overflow-x-hidden"
        id="about"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side - About Images */}
          <div data-aos="fade-right" className="space-y-6">
            {[dpImage, dpImage1, dpImage2].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`DP Electric Image ${index + 1}`}
                className="rounded-2xl shadow-xl hover:scale-105 transition duration-300 w-full object-cover"
              />
            ))}
          </div>

          {/* Right Side - About Text */}
          <div data-aos="fade-left">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-6 font-serif">
              About Us
            </h2>

            <p className="text-white text-base sm:text-lg leading-relaxed mb-6">
              <span className="font-bold text-xl">
                Welcome to{" "}
                <span className="text-orange-600">
                  DP Electric & Machinery Store
                </span>
              </span>{" "}
              — your trusted destination for premium electrical solutions and
              genuine products. We are proud{" "}
              <span className="text-red-600 font-semibold">Texmo</span> dealers,
              offering quality and performance with every product.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: "⚙️ What We Offer:",
                  desc: "A complete range of Texmo Motors – 2HP, 3HP, DMS2, DMS3, SHR4 and more. From domestic to agricultural, we have motors for every need.",
                },
                {
                  title: "🚿 Pump Solutions:",
                  desc: "Stocked with submersible pumps, openwell pumps, monoblocks — trusted by farms, factories & households.",
                },
                {
                  title: "🧰 Tools & Accessories:",
                  desc: "We offer top-grade Taparia tools: pana, pechkas (screwdrivers), pliers, and more — ideal for professional use.",
                },
                {
                  title: "🛠️ Pipes & Plumbing:",
                  desc: "High-quality pipes and plumbing parts for reliable installations and repairs — available in all sizes.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-white text-md">
                At{" "}
                <span className="font-semibold text-orange-600">
                  DP Electric
                </span>
                , we believe in{" "}
                <span className="text-green-700 font-bold">
                  trust, transparency, and long-term service
                </span>
                . Whether you're a homeowner, farmer, or business owner — we’re
                here to help you find the best solution.
              </p>
              <p className="text-md text-white">
                👉 Come visit us and discover why we’re the most trusted
                electrical and machinery store in town.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === B2B Section === */}
      <section
        id="b2b"
        className="bg-black w-full py-20 px-4 sm:px-6 lg:px-20 overflow-x-hidden"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* Left - B2B Content */}
          <div data-aos="fade-right" className="text-left">
            <h2 className="text-5xl font-bold text-orange-600 mb-6 font-serif">
              B2B Partnerships
            </h2>
            <p
              className="text-white text-lg mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              DP Electric and Machinery Store proudly supplies products and
              solutions for businesses across the region. We offer competitive
              pricing, bulk orders, and tailored support for dealers, retailers,
              and large-scale operations.
            </p>

            <a
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg"
            >
              Contact Us for B2B Inquiry
            </a>

            <p
              className="text-white mt-6 text-md"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              We serve individual customers as well as B2B clients. Whether
              you're a dealer, farmer, factory owner, or reseller, we provide
              wholesale pricing and industrial-grade products for large-scale
              needs.
            </p>
          </div>

          {/* Right - B2B Images (Top + Two without gap) */}
          <div className="space-y-4" data-aos="zoom-in">
            {/* Top Full-Width Image */}
            <img
              src={B2B}
              alt="B2B Top"
              className="w-full h-80 rounded-xl shadow-lg hover:scale-105 transition duration-300 object-cover"
            />

            {/* Two Side-by-Side Images without Gap */}
            <div className="grid grid-cols-2 gap-4 ">
              <img
                src={b2b}
                alt="B2B Bottom Left"
                className="w-full h-full object-cover rounded-l-xl shadow-lg hover:scale-105 transition duration-300 "
              />
              <img
                src={b2b1}
                alt="B2B Bottom Right"
                className="w-full h-92 object-cover rounded-r-xl shadow-lg hover:scale-105 transition duration-300 "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
