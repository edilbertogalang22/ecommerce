import express from "express";
import { verifyToken } from "../../middleware/authMiddleware.js";
import {
  getDashboardStats,
  fetchRecentOrders,
  fetchLowStockProducts,
} from "../../controllers/admin/dashboard.controller.js";
const router = express.Router();

router.get("/", verifyToken([1]), getDashboardStats);
router.get("/recent-orders", verifyToken([1]), fetchRecentOrders);
router.get("/low-stock-products", verifyToken([1]), fetchLowStockProducts);

export default router;
