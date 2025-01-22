import { createSlice } from "@reduxjs/toolkit";

// Helper functions for localStorage
const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const initialState = {
  cart: loadCartFromLocalStorage(), // Load cart from localStorage
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state.cart); // Save to localStorage
    },
    updateCart: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        if (quantity <= 0) {
          state.cart = state.cart.filter((item) => item.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
      saveCartToLocalStorage(state.cart); // Save to localStorage
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.cart); // Save to localStorage
    },
    clearCart: (state) => {
      state.cart = [];
      saveCartToLocalStorage(state.cart); // Clear localStorage
    },
  },
});

export const { addToCart, updateCart, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
