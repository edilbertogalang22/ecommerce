import express from "express";
import { verifyToken } from "../../middleware/authMiddleware.js";
import {
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../controllers/admin/category.controller.js";
const router = express.Router();

router.get("/", verifyToken([1]), fetchCategories);
router.post("/create-category", verifyToken([1]), createCategory);
router.put("/update-category/:id", verifyToken([1]), updateCategory);
router.delete("/delete-category/:id", verifyToken([1]), deleteCategory);

export default router;
