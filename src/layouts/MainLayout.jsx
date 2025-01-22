import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-1 container mx-auto p-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
