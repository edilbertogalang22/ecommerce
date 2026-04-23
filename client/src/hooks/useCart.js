import { useEffect, useState } from "react";
import api from "../api/api";

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // FETCH CART
  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await api.get("/users/cart");
      setCartItems(res.data);
    } catch (err) {
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  };

  // REMOVE ITEM
  const handleRemoveItem = async (id) => {
    try {
      await api.delete(`/users/cart/delete-cart/${id}`);

      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  // UPDATE QTY
  const handleUpdateQuantity = async (id, quantity) => {
    try {
      if (quantity < 1) return; // prevent 0 or negative

      await api.put(`/users/cart/update-quantity/${id}`, {
        quantity,
      });

      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item)),
      );
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return {
    cartItems,
    loading,
    fetchCart,
    handleRemoveItem,
    handleUpdateQuantity,
    setCartItems,
  };
};
