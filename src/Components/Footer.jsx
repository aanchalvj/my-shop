import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2.jpg";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-4 sm:px-6 md:px-20">
      <div className="max-w-7xl mx-auto w-full space-y-10">

        {/* 🔹 Grid Section: Branding, Links, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/*  Branding */}
          <div className="text-center lg:text-left">
            <img src={logo} alt="DP Logo" className="w-28 mx-auto lg:mx-0" />
            <h3 className="text-orange-500 text-2xl font-bold pt-5">
              DP Electric & Machinery Store
            </h3>
            <p className="text-sm mt-2">
              © {new Date().getFullYear()} DP Electric. All rights reserved.
            </p>
          </div>

          {/*  Navigation Links */}
          <div className="text-center lg:text-center text-sm text-white">
            <h4 className="text-lg font-semibold text-orange-400 mb-3">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-orange-500">🏠 Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500">📘 About</Link></li>
              <li><Link to="/products" className="hover:text-orange-500">🛒 Products</Link></li>
              <li><Link to="/services" className="hover:text-orange-500">🛠️ Services</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500">📞 Contact</Link></li>
            </ul>
          </div>

          {/*  Contact Info */}
          <div className="text-center lg:text-left text-sm text-white">
            <h4 className="text-lg font-semibold text-orange-400 mb-3">Contact</h4>
            <p className="mb-2">
              📍 <strong>Address:</strong><br />
              Petrol Pump Road, Opp. SBI Bank,<br />
              Near Durga Tent House,<br />
              Deoli (Tonk), Rajasthan
            </p>
            <p className="mb-2">
              📞 <strong>Phone:</strong><br />
              <a href="tel:+919414211393" className="text-orange-500 hover:underline">+91 9414211393</a><br />
              <a href="tel:+917597966392" className="text-orange-500 hover:underline">+91 7597966392</a><br />
              <a href="tel:+919571933122" className="text-orange-500 hover:underline">+91 9571933122</a>
            </p>
            <p>
              ✉️ <strong>Email:</strong><br />
              <a href="mailto:dpvijay1965@gmail.com" className="text-orange-500 hover:underline">dpvijay1965@gmail.com</a><br />
              <a href="mailto:chanchalvijay1240@gmail.com" className="text-orange-500 hover:underline">chanchalvijay1240@gmail.com</a>
            </p>
          </div>
        </div>

        {/* 🔹 Bottom Section: Social Icons */}
        {/* <div className="flex justify-center lg:justify-end gap-6 pt-4 flex-wrap">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500" aria-label="Facebook">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35A1.326...z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-400" aria-label="Twitter">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.835...z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500" aria-label="Instagram">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37a4 4 0 11-8 0 4 4 0 018 0z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div> */}
      </div>
    </footer>
  );
}
