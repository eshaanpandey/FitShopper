import { configureStore } from "@reduxjs/toolkit";

import servicesSlice from "./slices/servicesSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    services: servicesSlice,
    cart: cartSlice,
  },
});

export default store;
