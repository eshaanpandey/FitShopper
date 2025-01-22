import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { setServices, filterServices } from "../redux/slices/servicesSlice";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion"; // Import Framer Motion
import { v4 as uuidv4 } from "uuid"; // Import UUID for unique key generation

function HomePage() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.filteredServices);
  const [searchTerm, setSearchTerm] = useState("");
  const [animationKey, setAnimationKey] = useState(uuidv4()); // Generate a unique key for animations

  useEffect(() => {
    const mockServices = [
      { id: 1, name: "Yoga Class", description: "Relax and rejuvenate.", price: 20 },
      { id: 2, name: "Therapy Session", description: "Talk with a professional.", price: 50 },
      { id: 3, name: "Cooking Workshop", description: "Learn to cook.", price: 30 },
    ];
    dispatch(setServices(mockServices));
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterServices({ search: searchTerm, category: "" }));
  }, [searchTerm, dispatch]);

  useEffect(() => {
    // Update the animation key to force re-trigger on refresh
    setAnimationKey(uuidv4());
  }, []);

  const handleAddToCart = (service) => {
    dispatch(addToCart({ ...service, quantity: 1 }));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Services</h1>
      <input
        type="text"
        placeholder="Search services..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full border border-gray-300 rounded-lg p-3 mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {/* Key added to re-trigger animation on refresh */}
      <motion.div
        key={animationKey} // Unique key ensures animation triggers on refresh
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3, // Stagger effect for children
            },
          },
        }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: 0, x: -50 }, // Start slightly offscreen to the left
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }, // Animate into view
            }}
          >
            <ServiceCard service={service} onAddToCart={handleAddToCart} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default HomePage;
