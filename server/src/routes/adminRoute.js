import { getDashboardStats } from "../controllers/adminController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { fetchAllUsers } from "../controllers/manageUserController.js";
import { fetchCategories } from "../controllers/manageCategoriesController.js";
import { fetchProducts } from "../controllers/manageProductController.js";
import express from "express";

const router = express.Router();

router.get("/dashboard", verifyToken([1]), getDashboardStats);
router.get("/users", verifyToken([1]), fetchAllUsers);
router.get("/categories", verifyToken([1]), fetchCategories);
router.get("/products", verifyToken([1]), fetchProducts);

export default router;
