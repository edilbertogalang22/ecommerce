import express from "express";
import { verifyToken } from "../../middleware/authMiddleware.js";
import { getDashboardStats } from "../../controllers/admin/dashboard.controller.js";
const router = express.Router();

router.get("/", verifyToken([1]), getDashboardStats);

export default router;
