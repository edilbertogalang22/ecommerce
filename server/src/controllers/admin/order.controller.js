import {
  getAllOrders,
  getOrderItemsByOrderIds,
  updateOrderStatusModel,
} from "../../models/admin/order.model.js";

// GET ORDERS
export const getAdminOrders = async (req, res) => {
  try {
    const orders = await getAllOrders();

    const orderIds = orders.map((o) => o.order_id);
    const items = await getOrderItemsByOrderIds(orderIds);

    const grouped = orders.map((order) => ({
      ...order,
      customer_name: `${order.firstname} ${order.lastname}`,
      items: items.filter((i) => i.order_id === order.order_id),
    }));

    res.json(grouped);
  } catch (err) {
    console.error("GET ORDERS ERROR:", err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

// UPDATE ORDER STATUS
export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await updateOrderStatusModel(id, status);

    res.json({ message: "Order updated" });
  } catch (err) {
    console.error("UPDATE ERROR:", err);
    res.status(500).json({ message: "Update failed" });
  }
};
