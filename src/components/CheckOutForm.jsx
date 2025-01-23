import React, { useState } from "react";

function CheckoutForm({ onSubmit }) {
  const [customer, setCustomer] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(customer);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow-md">
      <div className="text-lg font-semibold text-gray-800 border-b pb-2">
        Please provide your details to proceed with the checkout.
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
          className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
          className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
          className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}

export default CheckoutForm;
