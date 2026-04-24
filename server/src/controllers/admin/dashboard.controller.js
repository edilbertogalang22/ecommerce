import {
  getTotalCustomers,
  getTotalOrders,
  getTotalProducts,
  getTotalRevenue,
  getLowStockProducts,
  getRecentOrders,
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

export const fetchRecentOrders = async (req, res) => {
  try {
    const orders = await getRecentOrders();
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch recent orders" });
  }
};

export const fetchLowStockProducts = async (req, res) => {
  try {
    const products = await getLowStockProducts();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch low stock products" });
  }
};
