"use client";
import { auth } from "@/lib/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!email || !password) {
  //     setError("Please fill out all fields.");
  //     return;
  //   }
  //   setError(null);
  //   setLoading(true);

  //   try {
  //     const res = await signInWithEmailAndPassword(email, password);
  //     console.log({ res });
  //     setEmail("");
  //     setPassword("");
  //     router.push("/");

  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     // On successful login, redirect or update UI as needed
  //   } catch (err) {
  //     setError("Login failed. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }
    setError(null);
    setLoading(true);

    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (!res) throw new Error("Login failed");
      console.log({ res });
      setEmail("");
      setPassword("");
      router.push("/");

      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (err: any) {
      if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else if (err.code === "auth/user-not-found") {
        setError("User not found. Please check your email or register.");
      } else {
        setError("Login failed. Please try again.");
      }
      console.error("Error during login:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Sign-In to MediLab
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">
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
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2">
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
          <button
            type="submit"
            className={`w-full py-2 rounded-md transition duration-300 ${
              loading
                ? "bg-blue-400 cursor-wait"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/register">
            <span className="text-blue-600 hover:underline cursor-pointer">
              Don't have an account? Register here
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
