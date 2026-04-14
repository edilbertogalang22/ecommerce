import { fetchAllProducts } from "../../models/users/product.model.js";

export const getProduct = async (req, res) => {
  try {
    const products = await fetchAllProducts();
    res.json(products);
  } catch (err) {
    console.err("Error fetching products:", err);
    res.status(500).json({ message: "Error fetching products" });
  }
};
