// src/components/AboutUs.tsx
import React from "react";

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">About Us</h2>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to MediLab, where we are dedicated to revolutionizing medical
          lab services. Our mission is to make healthcare accessible, efficient,
          and reliable for everyone. Through our innovative platform, we strive
          to provide the highest quality of medical testing and consultation
          services, ensuring a seamless experience for both patients and
          healthcare professionals.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Our team is composed of experienced professionals who are passionate
          about improving healthcare services. We believe in using advanced
          technology to enhance the accuracy and speed of medical testing, while
          also offering expert consultations to support our users' health and
          well-being.
        </p>
        <p className="text-lg text-gray-600">
          At MediLab, we value integrity, reliability, and customer
          satisfaction. We are committed to maintaining the highest standards of
          service and continuously improving our platform to meet the evolving
          needs of our users.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
