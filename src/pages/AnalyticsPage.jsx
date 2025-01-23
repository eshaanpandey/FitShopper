import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AnalyticsPage() {
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("analyticsData")) || [];
    setAnalyticsData(data);
  }, []);

  const totalRevenue = analyticsData.reduce((sum, item) => sum + item.total, 0);
  const totalServicesSold = analyticsData.reduce(
    (count, item) =>
      count + item.cart.reduce((sum, service) => sum + service.quantity, 0),
    0
  );

  return (
    <div className="container mx-auto p-4 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Analytics</h1>
      <div className="bg-white p-6 rounded shadow-md mb-6">
        <p className="text-gray-700 text-lg">
          <strong>Total Revenue:</strong> ${totalRevenue.toFixed(2)}
        </p>
        <p className="text-gray-700 text-lg">
          <strong>Total Services Sold:</strong> {totalServicesSold}
        </p>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Transaction History:
      </h2>
      <ul className="space-y-4">
        <AnimatePresence>
          {analyticsData.length > 0 ? (
            analyticsData.map((transaction, index) => (
              <motion.li
                key={index}
                className="border rounded p-4 bg-white shadow-md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.15, duration: 0.3 }}
              >
                <p className="text-gray-700">
                  <strong>Date:</strong> {transaction.date}
                </p>
                <p className="text-gray-700">
                  <strong>Customer:</strong> {transaction.customer.name}
                </p>
                <p className="text-gray-700">
                  <strong>Total:</strong> ${transaction.total.toFixed(2)}
                </p>
              </motion.li>
            ))
          ) : (
            <p>No transactions available.</p>
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
}

export default AnalyticsPage;
