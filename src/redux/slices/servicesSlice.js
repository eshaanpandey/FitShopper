import { createSlice } from "@reduxjs/toolkit";
import mockServices from "../../assets/mockServices";

const initialState = {
  filteredServices: mockServices, // Initial services
};

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    filterServices: (state, action) => {
      const { search, category } = action.payload;
      state.filteredServices = mockServices.filter(
        (service) =>
          (search === "" || service.name.toLowerCase().includes(search.toLowerCase())) &&
          (category === "" || service.category === category)
      );
    },
  },
});

export const { filterServices } = servicesSlice.actions;
export const selectServices = (state) => state.services.filteredServices;
export default servicesSlice.reducer;
