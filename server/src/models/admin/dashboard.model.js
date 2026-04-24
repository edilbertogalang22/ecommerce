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

// Recent Orders (last 7 days, limit 10)
export const getRecentOrders = async () => {
  // Step 1: fetch the recent 10 orders
  const [orders] = await db.query(`
    SELECT o.id, u.firstname AS customer_firstname, u.lastname AS customer_lastname,
           o.total_price, o.status, o.payment_status, o.created_at
    FROM orders o
    JOIN users u ON o.user_id = u.id
    ORDER BY o.created_at DESC
    LIMIT 10
  `);

  // Step 2: fetch items for all those orders in one query
  const orderIds = orders.map((o) => o.id);
  if (orderIds.length > 0) {
    const [items] = await db.query(
      `
      SELECT oi.order_id, oi.product_id, p.name AS product_name, oi.quantity, oi.price, p.image_url
      FROM order_items oi
      JOIN products p ON oi.product_id = p.id
      WHERE oi.order_id IN (?)
    `,
      [orderIds],
    );

    // attach items to each order
    orders.forEach((order) => {
      order.items = items.filter((item) => item.order_id === order.id);
      order.customer_name = `${order.customer_firstname} ${order.customer_lastname}`;
    });
  }

  return orders;
};

// Low Stock Products (threshold <= 5)
export const getLowStockProducts = async () => {
  const [rows] = await db.query(`
    SELECT id, name, stock
    FROM products
    WHERE stock <= 5
    ORDER BY stock ASC
  `);
  return rows;
};
