import {
  getTotalCustomers,
  getTotalOrders,
  getTotalProducts,
  getTotalRevenue,
} from "../../models/admin/dashboard.model.js";

export const getDashboardStats = async (req, res) => {
  try {
    const revenue = await getTotalRevenue();
    const orders = await getTotalOrders();
    const products = await getTotalProducts();
    const customers = await getTotalCustomers();

    res.json({
      revenue,
      orders,
      products,
      customers,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch dashboard stats" });
  }
};
