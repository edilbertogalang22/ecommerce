import express from "express";
import { verifyToken } from "../../middleware/authMiddleware.js";
import { checkOut, confirmPayment, getUserOrders } from "../../controllers/users/order.controller.js";
const router = express.Router();

router.post("/checkout", verifyToken([2]), checkOut);
router.put("/payment-success/:id", verifyToken([2]), confirmPayment);
router.get("/", verifyToken([2]), getUserOrders);
export default router;
