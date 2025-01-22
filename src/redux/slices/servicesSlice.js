import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: [
    { id: 1, name: "Yoga Class", category: "Fitness", price: 20 },
    { id: 2, name: "Therapy Session", category: "Therapy", price: 50 },
    { id: 3, name: "Cooking Workshop", category: "Workshops", price: 30 },
  ],
  filteredServices: [],
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    setServices: (state, action) => {
      state.services = action.payload;
    },

    filterServices: (state, action) => {
      const { search, category } = action.payload;
      state.filteredServices = state.services.filter(
        (service) =>
          (search === "" || service.name.toLowerCase().includes(search)) &&
          (category === "" || service.category === category)
      );
    },
  },
});

export const { setServices, filterServices } = servicesSlice.actions;
export const selectServices = (state) => state.services.filteredServices;
export default servicesSlice.reducer;
