import { getCategories } from "../models/manageCategoriesModel.js";

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
