import {
  checkOutModel,
  insertOrderItems,
  confirmPaymentModel,
  getUserOrdersModel,
} from "../../models/users/order.model.js";

// GET USER ORDERS
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await getUserOrdersModel(userId);

    res.json(orders);
  } catch (err) {
    console.error("Failed to get user orders:", err);
    res.status(500).json({ message: "Failed to get user orders" });
  }
};

// CHECKOUT ORDER (POST)
export const checkOut = async (req, res) => {
  try {
    const { user_id, items, total } = req.body;

    if (!user_id || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ message: "Invalid order data" });
    }

    const orderId = await checkOutModel(user_id, total);

    await insertOrderItems(orderId, items);

    res.json({
      message: "Checkout successful",
      orderId,
    });
  } catch (err) {
    console.error("Failed to check out:", err);
    res.status(500).json({
      message: "Failed to check out",
      error: err.message,
    });
  }
};

/**
 * PAYMENT SUCCESS (GCash confirmed)
 */
export const confirmPayment = async (req, res) => {
  try {
    const { id } = req.params;

    await confirmPaymentModel(id);

    res.json({
      message: "Payment confirmed",
      orderId: id,
    });
  } catch (err) {
    console.error("Payment error:", err);
    res.status(500).json({ message: "Payment update failed" });
  }
};
