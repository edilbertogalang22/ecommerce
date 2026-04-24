import express from "express";
import { verifyToken } from "../../middleware/authMiddleware.js";
import { getUserProfile } from "../../controllers/users/userprofile.controller.js";
const router = express.Router();

router.get("/", verifyToken([2]), getUserProfile);

export default router;
