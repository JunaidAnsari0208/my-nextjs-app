// src/components/Hero.tsx
import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-white h-screen overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-6 relative z-10">
          <h1 className="text-5xl font-extrabold text-blue-700 leading-tight">
            Revolutionizing <br /> Medical Lab Services
          </h1>

          <p className="text-lg text-gray-600 max-w-lg">
            Book your lab tests effortlessly, get fast and accurate results, and
            consult with experts—all in one app!
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <Link
              href="/appointment"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Make an Appointment
            </Link>
            <Link
              href="/learn-more"
              className="bg-gray-200 text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-300 transition duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side: Doctor Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center relative z-10">
          <img
            src="/images/doctor.jpg" // Replace with your image path
            alt="Doctor"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Decorative Shape in the Background */}
        <div className="absolute inset-0 flex justify-end items-center">
          <div className="h-64 w-64 bg-blue-100 rounded-full absolute right-10 bottom-10 md:right-20 md:bottom-20 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
