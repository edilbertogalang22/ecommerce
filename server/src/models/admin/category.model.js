import db from "../../config/db.js";

export const getCategories = async () => {
  const [categories] = await db.query("SELECT * FROM categories");
  return categories;
};

export const createCategory = async() => {

}

export const updateCategory = async() => {

}

export const deleteCategory = async() => {

}