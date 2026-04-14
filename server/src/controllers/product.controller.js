import {
  fetchAllProducts,
  fetchFeaturedProducts,
  fetchProductById,
} from "../models/product.model.js";

// GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const products = await fetchAllProducts();
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Error fetching products" });
  }
};

// GET FEATURED PRODUCTS (LIMIT 6)
export const getFeaturedProducts = async (req, res) => {
  try {
    const products = await fetchFeaturedProducts();
    res.json(products);
  } catch (err) {
    console.error("Error fetching featured products:", err);
    res.status(500).json({ message: "Error fetching featured products" });
  }
};

// GET SINGLE PRODUCT
export const getProductById = async (req, res) => {
  try {
    const product = await fetchProductById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ message: "Error fetching product" });
  }
};
