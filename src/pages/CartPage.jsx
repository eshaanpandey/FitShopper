import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, removeFromCart } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItems";

function CartPage() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateCart({ id, quantity }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto p-4 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={handleUpdateQuantity}
              onRemove={handleRemove}
            />
          ))}
          <div className="mt-4 text-right">
            <h2 className="text-xl font-bold text-gray-800">Total: ${total}</h2>
          </div>
          <button
            onClick={handleCheckout}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default CartPage;
