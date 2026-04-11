import { fetchAllProducts } from "../../models/admin/product.model.js";

// fetch all products
export const fetchProducts = async (req, res) => {
  try {
    const products = await fetchAllProducts();
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Error fetching products" });
  }
};

// create product
export const createProduct = async () => {

}

// update product
export const updateProduct = async () => {

}

// delete product
export const deleteProduct = async () => {

}