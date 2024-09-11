// src/components/Features.tsx
import React from "react";

const Features: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Our Key Features
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Feature 1 */}
          <div className="feature-card w-56 p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div className="feature-content transition-transform duration-700 ease-in-out animate-slideUp">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Easy Booking
              </h3>
              <p className="text-gray-600">
                Effortlessly book your lab tests and consultations through our
                user-friendly platform.
              </p>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="feature-card w-56 p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div className="feature-content transition-transform duration-700 ease-in-out animate-slideUp">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Fast Results
              </h3>
              <p className="text-gray-600">
                Get accurate results quickly, so you can get the care you need
                without delay.
              </p>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="feature-card w-56 p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div className="feature-content transition-transform duration-700 ease-in-out animate-slideUp">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Expert Consultations
              </h3>
              <p className="text-gray-600">
                Consult with experienced medical professionals through our app
                for personalized advice.
              </p>
            </div>
          </div>
          {/* Feature 4 */}
          <div className="feature-card w-56 p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div className="feature-content transition-transform duration-700 ease-in-out animate-slideUp">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Secure Data
              </h3>
              <p className="text-gray-600">
                Your personal data is kept secure with top-notch encryption and
                privacy measures.
              </p>
            </div>
          </div>
          {/* Feature 5 */}
          <div className="feature-card w-56 p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div className="feature-content transition-transform duration-700 ease-in-out animate-slideUp">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Get support anytime you need it with our 24/7 customer service
                team.
              </p>
            </div>
          </div>
          {/* Feature 6 */}
          <div className="feature-card w-56 p-6 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <div className="feature-content transition-transform duration-700 ease-in-out animate-slideUp">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                User-Friendly Interface
              </h3>
              <p className="text-gray-600">
                Navigate our app with ease thanks to an intuitive and simple
                interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
