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
        <div className="text-center text-gray-500">
          <p>Your cart is empty.</p>
          <p>No transactions have been made till now.</p>
          <button
            onClick={() => navigate("/home")}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Make Purchases
          </button>
        </div>
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
