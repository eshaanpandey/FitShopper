import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ReceiptPage from "./pages/ReceiptPage";
import AnalyticsPage from "./pages/AnalyticsPage";

function App() {
  const [analyticsData, setAnalyticsData] = useState([]);

  const handleCheckout = (receipt) => {
    const previousData = JSON.parse(localStorage.getItem("analyticsData")) || [];
    const updatedData = [...previousData, receipt];
    localStorage.setItem("analyticsData", JSON.stringify(updatedData));
    setAnalyticsData(updatedData);
  };

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage onCheckout={handleCheckout} />} />
        <Route path="/receipt" element={<ReceiptPage />} />
        <Route
          path="/analytics"
          element={<AnalyticsPage analyticsData={analyticsData} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
