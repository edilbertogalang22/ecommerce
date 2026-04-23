import {
  getCartItems,
  getCartByUsers,
  addToCart,
  updateQuantity,
  removeItem,
} from "../../models/users/cart.model.js";

export const getCartByUserController = async (req, res) => {
  try {
    const id = req.user.id;
    const cart = await getCartByUsers(id);
    res.json(cart);
  } catch (err) {
    console.error("Error fetching cart:", err);
    res.status(500).json({ message: "Error fetching cart" });
  }
};

export const getCartItemController = async (req, res) => {
  try {
    const userId = req.user.id;
    const cartItems = await getCartItems(userId);
    res.json(cartItems);
  } catch (err) {
    console.error("Error fetching cart items:", err);
    res.status(500).json({ message: "Error fetching cart items" });
  }
};

export const addToCartController = async (req, res) => {
  try {
    const userId = req.user.id; 

    const { product_id, quantity } = req.body;

    await addToCart(userId, product_id, quantity);

    res.json({ message: "Product added to cart successfully" });
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ message: "Error adding to cart" });
  }
};
export const updateQuantityController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id: cartId } = req.params;
    const { quantity } = req.body;

    const result = await updateQuantity(cartId, quantity, userId);

    res.json(result);
  } catch (err) {
    console.error("Error updating quantity:", err);
    res.status(500).json({ message: "Error updating quantity" });
  }
};

export const removeItemController = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id: cartId } = req.params;

    const result = await removeItem(userId, cartId);
    res.json(result);
  } catch (err) {
    console.error("Error removing item:", err);
    res.status(500).json({ message: "Error removing item" });
  }
};
