import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_h7riwj5",        // Your EmailJS service ID
        "template_a4wa7uu",       // Your EmailJS template ID
        form.current,
        "ocAp3tWUtgZ3Vbvjf"       // Your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setIsSent(true);
          setIsError(false);
          setIsLoading(false);
          form.current.reset();

          setTimeout(() => {
          setIsSent(false);
        }, 2000); // optional: reset form
        },
        (error) => {
          console.error("Email failed:", error.text);
          setIsError(true);
          setIsSent(false);
          setIsLoading(false);

           setTimeout(() => {
          setIsError(false);
        }, 2000);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-black py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/*  Left Side – Contact Details */}
        <div data-aos="fade-down">
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-6 font-serif">
            Get In Touch
          </h2>
          <p className="text-white mb-6 text-lg">
            Reach out to us for any inquiries about our products, services, or
            availability. We're here to help you.
          </p>

          <div className="space-y-4 text-white text-md">
            <p>
              📍 <strong>Address:</strong> <br />
              Petrol Pump Road, Opposite SBI Bank, <br /> Near Durga Tent House,
              Deoli (Tonk), Rajasthan
            </p>
            <p>
              📞 <strong>Phone:</strong> <br />
              <a href="tel:+919414211393" className="text-orange-500 hover:underline">
                +91 9414211393
              </a>
              <br />
              <a href="tel:+917597966392" className="text-orange-500 hover:underline">
                +91 7597966392
              </a>
              <br />
              <a href="tel:+919571933122" className="text-orange-500 hover:underline">
                +91 9571933122
              </a>
            </p>
            <p>
              ✉️ <strong>Email:</strong> <br />
              <a href="mailto:dpvijay1965@gmail.com" className="text-orange-500 hover:underline">
                dpvijay1965@gmail.com
              </a>
              <br />
              <a href="mailto:chanchal1995@gmail.com" className="text-orange-500 hover:underline">
                chanchalvijay1240@gmail.com
              </a>
            </p>
            <p>
              🕒 <strong>Timings:</strong> <br />
              Mon–Sun: 9 AM – 7 PM
            </p>
          </div>
        </div>

        {/*  Right Side – Contact Form */}
        <div data-aos="fade-up" className="w-full">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md space-y-6 w-full"
          >
            {/*  Show Success/Error Messages */}
            {isSent && (
              <p className="text-green-600 font-semibold text-center">
                 Your message has been sent successfully!
              </p>
            )}
            {isError && (
              <p className="text-red-600 font-semibold text-center">
                ❌ Something went wrong. Please try again.
              </p>
            )}

            {/* Name Field */}
            <div>
              <label className="block text-gray-800 font-semibold mb-1">Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-800 font-semibold mb-1">Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-800 font-semibold mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-md transition duration-300 cursor-pointer"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
