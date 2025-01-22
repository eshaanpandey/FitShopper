import React from "react";

function ServiceCard({ service, onAddToCart }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold">${service.price}</span>
        <button
          onClick={() => onAddToCart(service)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
