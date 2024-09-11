// src/components/Footer.tsx
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Contact Us</h4>
          <p className="mb-1">123 MediLab Street</p>
          <p className="mb-1">City, State, ZIP</p>
          <p className="mb-1">Phone: (123) 456-7890</p>
          <p>Email: support@medilab.com</p>
        </div>

        {/* Navigation Links */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" passHref>
              <span className="text-white hover:text-gray-400">Facebook</span>
            </Link>
            <Link href="https://twitter.com" passHref>
              <span className="text-white hover:text-gray-400">Twitter</span>
            </Link>
            <Link href="https://linkedin.com" passHref>
              <span className="text-white hover:text-gray-400">LinkedIn</span>
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">
            Subscribe to Our Newsletter
          </h4>
          <form action="#" method="post" className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l-lg border border-gray-300"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-4">
        <p>© 2024 MediLab. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
