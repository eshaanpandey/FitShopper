import React from "react";

function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="border-b py-4 flex justify-between items-center bg-white shadow-md rounded p-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-500">${item.price} x {item.quantity}</p>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span className="text-gray-700">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
        <button
          onClick={() => onRemove(item.id)}
          className="text-red-500 hover:text-red-700 font-medium"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
