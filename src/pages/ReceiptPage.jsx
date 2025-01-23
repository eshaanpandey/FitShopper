import React from "react";
import { useLocation, Link } from "react-router-dom";
import ReceiptCard from "../components/ReceiptCard";

function ReceiptPage() {
  const { state: receipt } = useLocation();

  return (
    <div className="container mx-auto p-4 bg-gray-50">
      <ReceiptCard receipt={receipt} />
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ReceiptPage;
