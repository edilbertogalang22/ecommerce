import db from "../../config/db.js";

//* GET USER ORDERS *//
export const getUserOrdersModel = async (userId) => {
  const [orders] = await db.query(
    "SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC",
    [userId],
  );

  // Fetch items for each order
  const ordersWithItems = await Promise.all(
    orders.map(async (order) => {
      const [items] = await db.query(
        "SELECT oi.*, p.name, p.image_url FROM order_items oi JOIN products p ON oi.product_id = p.id WHERE oi.order_id = ?",
        [order.id],
      );
      return { ...order, items };
    }),
  );

  return ordersWithItems;
};

//* CHECKOUT ORDER *//
export const checkOutModel = async (user_id, total_price) => {
  const [result] = await db.query(
    `INSERT INTO orders (user_id, total_price, payment_status, status)
     VALUES (?, ?, ?, ?)`,
    [user_id, total_price, "pending", "pending"],
  );

  return result.insertId;
};

/**
 * INSERT ORDER ITEMS
 */
export const insertOrderItems = async (orderId, items) => {
  try {
    for (let item of items) {
      const [rows] = await db.query("SELECT stock FROM products WHERE id = ?", [
        item.product_id,
      ]);

      if (rows.length === 0) {
        throw new Error(`Product ID ${item.product_id} does not exist`);
      }

      const currentStock = rows[0].stock;

      if (currentStock < item.quantity) {
        throw new Error(`Not enough stock for product ID ${item.product_id}`);
      }

      await db.query(
        `INSERT INTO order_items (order_id, product_id, quantity, price)
         VALUES (?, ?, ?, ?)`,
        [orderId, item.product_id, item.quantity, item.price],
      );

      await db.query("UPDATE products SET stock = stock - ? WHERE id = ?", [
        item.quantity,
        item.product_id,
      ]);
    }
  } catch (err) {
    console.error("ORDER ITEMS ERROR:", err);
    throw err;
  }
};

/**
 * CONFIRM PAYMENT (GCash success)
 */
export const confirmPaymentModel = async (orderId) => {
  return await db.query(
    "UPDATE orders SET payment_status = ?, status = ? WHERE id = ?",
    ["paid", "pending", orderId],
  );
};
