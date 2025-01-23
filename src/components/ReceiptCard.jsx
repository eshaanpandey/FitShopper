import React from "react";

function ReceiptCard({ receipt }) {
  return (
    <div className="border rounded p-4 shadow-md max-w-md mx-auto bg-white">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Receipt</h2>
      <div className="space-y-2">
        <p><strong>Customer:</strong> {receipt.customer.name}</p>
        <p><strong>Email:</strong> {receipt.customer.email}</p>
        <p><strong>Phone:</strong> {receipt.customer.phone}</p>
        <hr />
        {receipt.cart.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>{item.name} x {item.quantity}</span>
            <span>${item.price * item.quantity}</span>
          </div>
        ))}
        <hr />
        <div className="flex justify-between font-semibold">
          <span>Total:</span>
          <span>${receipt.total}</span>
        </div>
      </div>
    </div>
  );
}

export default ReceiptCard;
