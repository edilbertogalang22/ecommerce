import { useState, useEffect } from "react";
import api from "../api/api";
const useFeaturedProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await api.get("/products/featured");
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFeaturedProducts();
  }, []);
  return { products };

  
};

export default useFeaturedProduct;
