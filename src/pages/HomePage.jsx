import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

import { setServices } from "../redux/slices/servicesSlice";
import ServiceCard from "../components/ServiceCard";

function HomePage() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.services);

  useEffect(() => {
    // Simulated API call
    const mockServices = [
      { id: 1, name: "Yoga Class", description: "Relax and rejuvenate.", price: 20 },
      { id: 2, name: "Therapy Session", description: "Talk with a professional.", price: 50 },
      { id: 3, name: "Coding Workshop", description: "Learn to code.", price: 30 },
    ];
    dispatch(setServices(mockServices));
  }, [dispatch]);

  const handleAddToCart = (service) => {
    dispatch(addToCart({ ...service, quantity: 1 }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
