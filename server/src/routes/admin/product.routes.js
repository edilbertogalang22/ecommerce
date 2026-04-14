import express from "express";
import { verifyToken } from "../../middleware/authMiddleware.js";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  // fetchFeaturedProduct,
  // fetchProductById,
} from "../../controllers/admin/product.controller.js";
const router = express.Router();

// router.get("/featured", fetchFeaturedProduct);
// router.get("/product/:id", fetchProductById);
router.get("/", fetchProducts);
router.post("/create-product", verifyToken([1]), createProduct);
router.put("/update-product/:id", verifyToken([1]), updateProduct);
router.delete("/delete-product/:id", verifyToken([1]), deleteProduct);

export default router;
