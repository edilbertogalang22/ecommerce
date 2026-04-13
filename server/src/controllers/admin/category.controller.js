import {
  getCategories,
  createCategories,
  updateCategories,
  deleteCategories,
} from "../../models/admin/category.model.js";

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
export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    const result = await createCategories(name, description);

    res.json({ message: "Category created successfully", result });
  } catch (err) {
    console.error("Error creating category:", err);
    res
      .status(500)
      .json({ message: "Failed to create category", error: err.message });
  }
};

// update category
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const result = await updateCategories(id, name, description);

    res.json({ message: "Category updated successfully", result });
  } catch (err) {
    console.error("Error updating category:", err);
    res
      .status(500)
      .json({ message: "Failed to update category", error: err.message });
  }
};

// delete category
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteCategories(id);

    res.json({ message: "Category deleted successfully", result });
  } catch (err) {
    console.error("Error deleting category:", err);
    res
      .status(500)
      .json({ message: "Failed to delete category", error: err.message });
  }
};
