import {
  loginUsers,
  logoutUsers,
  registerUsers,
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import express from "express";

const router = express.Router();

router.post("/login", loginUsers);
router.post("/register", registerUsers);
router.post("/logout", verifyToken(), logoutUsers);

export default router;
