import React, { useEffect } from "react";
import bgImage from "../assets/Homebanners.jpg";
import vision from "../assets/vision.jpg";
import customer1 from "../assets/model.jpg";
import customer2 from "../assets/men.jpg";
import customer3 from "../assets/women.jpg";
import customer4 from "../assets/men1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full pt-20 overflow-x-hidden">
      {/* Hero Section */}
     
      <div
        className="relative bg-cover bg-center min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] px-4 sm:px-8 lg:px-16 py-12 flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
        id="home"
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Add AOS animations to h1 and p */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold italic text-orange-400 leading-snug tracking-tight"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Trusted by Professionals,
              <br className="hidden md:block" /> Chosen by Experts
            </h1>
            <p
              className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              High-performance electric tools and machinery — only at
              <span className="font-semibold text-orange-300">
                {" "}
                DP Electric & Machinery Store.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Section 1 – Why Choose Us */}
      <div
        className="bg-black py-20 px-6 sm:px-10 lg:px-20"
        data-aos="fade-up"
        id="why"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-6 font-serif">
            Why Choose DP Electric?
          </h2>
          <p className="text-white text-lg leading-relaxed mb-10">
            With decades of trust and premium service, we are Rajasthan's top
            destination for electrical and agricultural equipment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "💡 Expert Guidance",
                desc: "We assist you with choosing the perfect motor, pump, or tool based on your exact requirement.",
                delay: "0",
              },
              {
                title: "🛠️ Genuine Products",
                desc: "Only 100% authentic tools and equipment from leading brands like Texmo and Taparia.",
                delay: "200",
              },
              {
                title: "📦 Quick Delivery",
                desc: "We ensure fast and secure delivery, right to your doorstep or farm.",
                delay: "400",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black p-6 rounded-lg shadow-white hover:shadow-md transition"
                data-aos="zoom-in-up"
                data-aos-delay={item.delay}
              >
                <h4 className="text-orange-500 text-xl font-bold mb-2">
                  {item.title}
                </h4>
                <p className="text-white">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 – Our Vision */}
      <div
        className="bg-black py-20 px-6 sm:px-10 lg:px-20"
        data-aos="fade-right"
        id="vision"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 lg:pr-10 text-center lg:text-left mb-10 lg:mb-0">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-6 font-serif">
                Our Vision
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Our goal is to empower every household, farmer, and business
                with top-quality, long-lasting equipment. We're not just selling
                products — we're building relationships based on performance and
                trust.
              </p>
            </div>

            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src={vision}
                alt="Our vision"
                className="w-full max-w-xs lg:max-w-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 – Testimonials */}
      <div
        className="bg-black py-20 px-6 sm:px-10 lg:px-20"
        data-aos="fade-left"
        id="testimonials"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-500 mb-6 font-serif">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              {
                name: "Vikram Singh",
                review:
                  "DP Electric helped me install a reliable pump on my farm. It's working great even after 2 years!",
                image: customer1,
                role: "Farmer",
              },
              {
                name: "Manoj Sharma",
                review:
                  "I bought Taparia tools for my workshop. Best quality at reasonable rates.",
                image: customer2,
                role: "Workshop Owner",
              },
              {
                name: "Anjali Jain",
                review:
                  "Very supportive staff and timely delivery. Highly recommend their services.",
                image: customer3,
                role: "Homeowner",
              },
              {
                name: "Rajesh Kumar",
                review:
                  "Excellent after-sales service. They resolved my motor issue within hours of my complaint.",
                image: customer4,
                role: "Business Owner",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-black p-6 rounded-lg shadow-white shadow-2xs hover:shadow-md transition h-full flex flex-col"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className=" shadow-2xl shadow-white w-20 h-20 rounded-full object-cover border-4 border-orange-400"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-orange-500 text-white p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-white italic flex-grow">"{item.review}"</p>
                <div className="mt-4">
                  <p className="text-orange-600 font-semibold">{item.name}</p>
                  <p className="text-white text-sm">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
