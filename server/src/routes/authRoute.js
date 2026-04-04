import { loginUsers, logoutUsers } from "../controllers/authController.js";
import express from "express";

const router = express.Router();

router.post("/login", loginUsers);
router.post("/logout", logoutUsers);

export default router;
