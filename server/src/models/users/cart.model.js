import db from "../../config/db.js";

export const getCartItems = async (user_id) => {
  const [rows] = await db.query("SELECT * FROM cart_items WHERE user_id = ?", [
    user_id,
  ]);

  return rows;
};

export const getCartByUsers = async (user_id) => {
  const [rows] = await db.query(
    `
   SELECT 
  c.id,
  c.quantity,
  p.name,
  p.price,
  p.image_url,
  p.description,
  cat.name AS category_name
FROM cart_items c
JOIN products p ON p.id = c.product_id
LEFT JOIN categories cat ON cat.id = p.category_id
WHERE c.user_id = ?
    `,
    [user_id],
  );

  return rows;
};

export const addToCart = async (user_id, product_id, quantity) => {
  const sql = `INSERT INTO cart_items (user_id, product_id, quantity) VALUES (?, ?, ?)`;

  return db.query(sql, [user_id, product_id, quantity]);
};

export const updateQuantity = async (cartId, quantity, userId) => {
  const sql = `
    UPDATE cart_items 
    SET quantity = ? 
    WHERE id = ? AND user_id = ?
  `;

  return db.query(sql, [quantity, cartId, userId]);
};

export const removeItem = async (user_Id, cartId) => {
  const sql = `DELETE FROM cart_items WHERE id =? AND user_id = ?`;

  return db.query(sql, [cartId, user_Id]);
};
