import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterServices } from "../redux/slices/servicesSlice";
import ServiceCard from "../components/ServiceCard";
import { addToCart } from "../redux/slices/cartSlice";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

function HomePage() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services.filteredServices);
  const [searchTerm, setSearchTerm] = useState("");
  const [animationKey, setAnimationKey] = useState(uuidv4());

  useEffect(() => {
    dispatch(filterServices({ search: "", category: "" }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterServices({ search: searchTerm, category: "" }));
  }, [searchTerm, dispatch]);

  useEffect(() => {
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

      <motion.div
        key={animationKey}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
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
