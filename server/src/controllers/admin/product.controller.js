import {
  fetchAllProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} from "../../models/admin/product.model.js";

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
export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      stock,
      category_id,
      image_url,
      featured,
    } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    const result = await createProducts(
      name,
      description,
      price,
      stock,
      category_id,
      image_url,
      featured,
    );

    res.json({ message: "Product created successfully", result });
  } catch (err) {
    console.error("Error creating product:", err);
    res.status(500).json({ message: "Error creating product" });
  }
};

// update product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      price,
      stock,
      category_id,
      image_url,
      featured,
    } = req.body;

    const result = await updateProducts(
      id,
      name,
      description,
      price,
      stock,
      category_id,
      image_url,
      featured,
    );

    res.json({ message: "Product updated successfully", result });
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({ message: "Error updating product" });
  }
};

// delete product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteProducts(id);

    res.json({ message: "Product deleted successfully", result });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ message: "Error deleting product" });
  }
};
