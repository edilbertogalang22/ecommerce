import db from "../../config/db.js";

export const getCategories = async () => {
  const [categories] = await db.query("SELECT * FROM categories");
  return categories;
};

export const createCategories = async (name, description) => {
  const sql = `INSERT INTO categories (name, description, created_at, updated_at) VALUES (?, ?, NOW(), NOW())`;

  return db.query(sql, [name, description]);
};

export const updateCategories = async (id, name, description) => {
  const sql = `UPDATE categories SET name = ?, description = ?, updated_at = NOW() WHERE id = ?`;

  return db.query(sql, [name, description, id]);
};

export const deleteCategories = async (id) => {
  const sql = `DELETE FROM categories WHERE id = ?`;

  return db.query(sql, [id]);
};
