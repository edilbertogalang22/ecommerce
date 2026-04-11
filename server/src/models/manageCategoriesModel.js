import db from "../config/db.js";

export const getCategories = async () => {
  const [categories] = await db.query("SELECT * FROM categories");
  return categories;
};
