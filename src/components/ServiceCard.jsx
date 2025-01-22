import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateCart } from "../redux/slices/cartSlice";

function ServiceCard({ service }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const cartItem = cart.find((item) => item.id === service.id);

  const handleAddToCart = () => {
    if (cartItem) {
      dispatch(updateCart({ id: service.id, quantity: cartItem.quantity + 1 }));
    } else {
      dispatch(addToCart({ ...service, quantity: 1 }));
    }
  };

  const handleRemoveOne = () => {
    if (cartItem.quantity > 1) {
      dispatch(updateCart({ id: service.id, quantity: cartItem.quantity - 1 }));
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(service.id));
  };

  return (
    <div className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
      <p className="text-gray-600 mt-2">{service.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-green-600">${service.price}</span>
        {cartItem ? (
          <div className="flex items-center space-x-2">
            <button
              onClick={handleRemoveFromCart}
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
            >
              Remove
            </button>
            <button
              onClick={handleRemoveOne}
              className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300"
              disabled={cartItem.quantity <= 1}
            >
              -
            </button>
            <span>{cartItem.quantity}</span>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
            >
              +
            </button>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ServiceCard;
