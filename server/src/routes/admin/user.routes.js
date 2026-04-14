import express from "express";
import { verifyToken } from "../../middleware/authMiddleware.js";
import {
  fetchAllUsers,
  updateUser,
  deleteUser,
} from "../../controllers/admin/user.controller.js";
const router = express.Router();

router.get("/",  fetchAllUsers);
router.put("/update-user/:id", verifyToken([1]), updateUser);
router.delete("/delete-user/:id", verifyToken([1]), deleteUser);

export default router;
