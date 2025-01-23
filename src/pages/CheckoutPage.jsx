import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckOutForm from "../components/CheckOutForm";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";
import Modal from "../components/Modal";

function CheckoutPage({ onCheckout }) {
  const cart = useSelector((state) => state.cart.cart);
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCheckout = (customer) => {
    setIsProcessing(true);

    setTimeout(() => {
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const receipt = { customer, cart, total, date: new Date().toLocaleString() };
      
      onCheckout(receipt);
      dispatch(clearCart());
      navigate("/receipt", { state: receipt });
    }, 2000); // Mocking payment processing
  };

  return (
    <div className="container w-3/6 mx-auto p-4 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Checkout</h1>
      <CheckOutForm onSubmit={handleCheckout} />
      {isProcessing && <Modal />}
    </div>
  );
}

export default CheckoutPage;
