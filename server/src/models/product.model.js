import db from "../config/db.js";

// PUBLIC: ALL PRODUCTS
export const fetchAllProducts = async () => {
  const [rows] = await db.query(`
    SELECT products.*, categories.name AS category_name
    FROM products
    LEFT JOIN categories ON products.category_id = categories.id
  `);

  return rows;
};

// PUBLIC: FEATURED (LIMITED)
export const fetchFeaturedProducts = async () => {
  const [rows] = await db.query(`
    SELECT * FROM products WHERE featured = 1 LIMIT 6
  `);

  return rows;
};

// PUBLIC: SINGLE PRODUCT
export const fetchProductById = async (id) => {
  const [rows] = await db.query(
    `
    SELECT products.*, categories.name AS category_name
    FROM products
    LEFT JOIN categories ON products.category_id = categories.id
    WHERE products.id = ?
  `,
    [id],
  );

  return rows[0];
};
