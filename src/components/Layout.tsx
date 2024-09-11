// src/components/Layout.tsx
import React, { ReactNode } from "react";
import Navbar from "./Navbar"; // Make sure this path is correct

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
