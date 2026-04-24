import db from "../../config/db.js";

export const getAllOrders = async () => {
  const [rows] = await db.query(`
    SELECT 
      o.id AS order_id,
      o.user_id,
      o.total_price,
      o.status,
      o.created_at,
      o.payment_status,
      u.firstname,
      u.lastname,
      u.email
    FROM orders o
    JOIN users u ON u.id = o.user_id
    ORDER BY o.created_at DESC
  `);

  return rows;
};

export const getOrderItemsByOrderIds = async (orderIds) => {
  if (!orderIds || orderIds.length === 0) return [];

  const [rows] = await db.query(
    `
    SELECT 
      oi.order_id,
      oi.product_id,
      oi.quantity,
      oi.price,
      p.name,
      p.image_url
    FROM order_items oi
    JOIN products p ON p.id = oi.product_id
    WHERE oi.order_id IN (?)
  `,
    [orderIds],
  );

  return rows;
};

export const updateOrderStatusModel = async (orderId, status) => {
  return await db.query("UPDATE orders SET status = ? WHERE id = ?", [
    status,
    orderId,
  ]);
};
