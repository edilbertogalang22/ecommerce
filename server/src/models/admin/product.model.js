import db from "../../config/db.js";

export const fetchAllProducts = async () => {
  const [products] = await db.query(`
    SELECT 
    products.*,
    categories.name AS category_name
    FROM products
    LEFT JOIN categories
     ON products.category_id = categories.id`);

  return products;
};

export const createProducts = async (
  name,
  description,
  price,
  stock,
  category_id,
  image_url,
  featured,
) => {
  const sql = `
  INSERT INTO products 
  (name, description, price, stock, category_id, created_at, updated_at, image_url, featured) 
  VALUES (?, ?, ?, ?, ?, NOW(), NOW(), ?, ?)
`;

  return db.query(sql, [
    name,
    description,
    price,
    stock,
    category_id,
    image_url,
    featured ? 1 : 0,
  ]);
};

export const updateProducts = async () => {
  const sql = `UPDATE products SET name = ?, description = ?, price = ?, stock = ?, category_id = ?, updated_at = NOW() WHERE id = ?`;
};

export const deleteProducts = async () => {};
