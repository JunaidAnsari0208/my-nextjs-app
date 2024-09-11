"use client";
import Link from "next/link";
import Authentication from "./Authentication";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-800"
        >
          MediLab
        </Link>
        <Authentication />
      </div>
    </nav>
  );
};

export default Navbar;
