// src/pages/_app.tsx
import Footer from "@/components/Footer";
import type { AppProps } from "next/app";
import React from "react";
import Layout from "../components/Layout"; // Make sure this path is correct
import "../styles/globals.css"; // Import global styles if needed

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
};

export default MyApp;
