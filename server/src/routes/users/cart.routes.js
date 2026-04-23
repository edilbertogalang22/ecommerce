import express from "express";
import {
  getCartByUserController,
  getCartItemController,
  addToCartController,
  updateQuantityController,
  removeItemController,
} from "../../controllers/users/cart.controller.js";
import { verifyToken } from "../../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add-to-cart", verifyToken([2]), addToCartController);
// router.get("/fetch-cart", verifyToken([2]), getCartItemController);
router.put("/update-quantity/:id", verifyToken([2]), updateQuantityController);
router.delete("/delete-cart/:id", verifyToken([2]), removeItemController);
router.get("/", verifyToken([2]), getCartByUserController);

export default router;
