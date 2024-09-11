// src/pages/register.tsx
import Link from "next/link";
import React, { useState } from "react";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [userType, setUserType] = useState<"customer" | "staff">("customer");
  const [staffRole, setStaffRole] = useState<
    "admin" | "doctor" | "drugstore" | ""
  >("");
  const [error, setError] = useState<string | null>(null);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here
    if (
      !name ||
      !email ||
      !password ||
      !phone ||
      !dob ||
      (userType === "staff" && !staffRole)
    ) {
      setError("Please fill out all fields.");
      return;
    }
    // Clear error and proceed with registration
    setError(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Register for MediLab
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="dob" className="block text-gray-700 mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">I am a</label>
            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="customer"
                name="userType"
                value="customer"
                checked={userType === "customer"}
                onChange={() => setUserType("customer")}
                className="mr-2"
              />
              <label htmlFor="customer" className="text-gray-700">
                User
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="staff"
                name="userType"
                value="staff"
                checked={userType === "staff"}
                onChange={() => setUserType("staff")}
                className="mr-2"
              />
              <label htmlFor="staff" className="text-gray-700">
                Staff Member
              </label>
            </div>
          </div>
          {userType === "staff" && (
            <div>
              <label className="block text-gray-700 mb-2">Staff Role</label>
              <select
                id="staffRole"
                value={staffRole}
                onChange={(e) =>
                  setStaffRole(
                    e.target.value as "admin" | "doctor" | "drugstore"
                  )
                }
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
                <option value="drugstore">Drug Store Manager</option>
              </select>
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/login">
            <span className="text-blue-600 hover:underline cursor-pointer">
              Already have an account? Login here
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
