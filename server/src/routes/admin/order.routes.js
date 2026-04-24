import express from "express";
import { verifyToken } from "../../middleware/authMiddleware.js";
import {
  getAdminOrders,
  updateOrderStatus,
} from "../../controllers/admin/order.controller.js";
const router = express.Router();

router.get("/", verifyToken([1]), getAdminOrders);
router.put("/update-order/:id", verifyToken([1]), updateOrderStatus);

export default router;
