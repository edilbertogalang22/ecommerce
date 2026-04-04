import { getDashboardStats } from "../controllers/adminController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import express from "express";

const router = express.Router();

router.get("/dashboard", verifyToken([1]), getDashboardStats);

export default router;
