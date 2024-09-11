// src/components/Testimonials.tsx
import React from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Patient",
    testimonial:
      "MediLab made booking my tests so easy and convenient. The results were accurate, and the service was top-notch!",
  },
  {
    name: "Jane Smith",
    role: "Patient",
    testimonial:
      "The expert consultations provided through MediLab were extremely helpful. Highly recommended!",
  },
  {
    name: "Dr. Emily Brown",
    role: "Doctor",
    testimonial:
      "As a healthcare professional, I appreciate the efficiency and accuracy of MediLab. It's a great tool for both patients and providers.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          What Our Users Say
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3"
            >
              <p className="text-gray-600 italic mb-4">
                "{testimonial.testimonial}"
              </p>
              <h3 className="text-lg font-semibold text-gray-700">
                {testimonial.name}
              </h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
