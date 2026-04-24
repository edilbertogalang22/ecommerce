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
        quantity: Number(quantity),
      });

      navigate("/cart");
    } catch (err) {
      console.error("Error adding product to cart:", err);
    }
  };

  const handleBuyNow = () => {
    const checkoutItems = [
      {
        product_id: product.id,
        name: product.name,
        price: product.price,
        quantity: Number(quantity),
        image_url: product.image_url,
      },
    ];

    localStorage.setItem("checkout_items", JSON.stringify(checkoutItems));

    const total = product.price * quantity;
    localStorage.setItem("total", total);

    navigate("/payment");
  };

  return {
    product,
    setQuantity,
    loading,
    error,
    handleAddToCart,
    quantity,
    handleBuyNow,
  };
};

export default useProductDetails;
