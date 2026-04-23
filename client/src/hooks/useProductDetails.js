import { useEffect, useState } from "react";
import api from "../api/api";
import { useParams, useNavigate } from "react-router-dom";

const useProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const res = await api.get(`/products/product/${id}`);
        setProduct(res.data);
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      await api.post("/users/cart/add-to-cart", {
        product_id: product.id,
        quantity: quantity,
      });

      setTimeout(() => navigate("/cart"), 300);
    } catch (err) {
      console.error("Error adding product to cart:", err);
    }
  };

  return { product, loading, error, handleAddToCart, quantity, setQuantity };
};

export default useProductDetails;
