import { getCategories } from "../../models/admin/category.model.js";

// fetch categories
export const fetchCategories = async (req, res) => {
  try {
    const categories = await getCategories();
    res.json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res
      .status(500)
      .json({ message: "Failed to fetch categories", error: err.message });
  }
};

// create category
export const createCategory = async () => {};

// update category
export const updateCategory = async () => {};

// delete category
export const deleteCategory = async () => {};
