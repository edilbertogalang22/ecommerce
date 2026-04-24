import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

export const useCart = () => {
  const navigate = useNavigate();
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

      setCartItems((prev) => prev.filter((item) => item.cart_id !== id));
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  // UPDATE QTY
  const handleUpdateQuantity = async (id, quantity) => {
    try {
      if (quantity < 1) return;

      await api.put(`/users/cart/update-quantity/${id}`, {
        quantity,
      });

      setCartItems((prev) =>
        prev.map((item) =>
          item.cart_id === id ? { ...item, quantity } : item,
        ),
      );
    } catch (err) {
      console.error("Error updating quantity:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleCheckOut = () => {
    const checkoutItems = cartItems.map((item) => ({
      product_id: item.product_id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    localStorage.setItem("checkout_items", JSON.stringify(checkoutItems));

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    localStorage.setItem("total", total);

    navigate("/payment");
  };

  return {
    cartItems,
    loading,
    fetchCart,
    handleRemoveItem,
    handleUpdateQuantity,
    setCartItems,
    handleCheckOut,
  };
};
