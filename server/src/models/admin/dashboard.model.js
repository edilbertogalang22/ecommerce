import db from "../../config/db.js";

export const getTotalRevenue = async () => {
  const [rows] = await db.query(
    "SELECT SUM(total_price) as revenue FROM orders",
  );
  return rows[0].revenue || 0;
};

export const getTotalOrders = async () => {
  const [rows] = await db.query("SELECT COUNT(*) as orders FROM orders");
  return rows[0].orders || 0;
};

export const getTotalProducts = async () => {
  const [rows] = await db.query("SELECT COUNT(*) as products FROM products");
  return rows[0].products || 0;
};

export const getTotalCustomers = async () => {
  const [rows] = await db.query(
    "SELECT COUNT(*) as customers FROM users WHERE user_type = 2",
  );
  return rows[0].customers || 0;
};

