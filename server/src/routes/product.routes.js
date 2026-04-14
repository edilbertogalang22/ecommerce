import express from "express";
import {
  getProducts,
  getFeaturedProducts,
  getProductById,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/featured", getFeaturedProducts);
router.get("/product/:id", getProductById);

export default router;
