import express from "express";
import { verifyToken } from "../../middleware/authMiddleware.js";
import { getProduct } from "../../controllers/users/product.controller.js";
const router = express.Router();

router.get("/", getProduct);

export default router;
