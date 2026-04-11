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

export const createProduct = async () => {
  
};

export const updateProduct = async () => {
  
};

export const deleteProduct = async () => {
  
};