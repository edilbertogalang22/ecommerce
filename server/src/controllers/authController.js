import {
  loginUser,
  updateUserStatus,
  logoutUserById,
} from "../models/authModel.js";
import { generateToken } from "../middleware/authMiddleware.js";

export const loginUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginUser({ email, password });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    await updateUserStatus(user.id, 1);

    const token = generateToken(user);
    res.json({
      token,
      user: {
        id: user.id,
        firstname: user.firstname,
        email: user.email,
        user_type: user.user_type,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Login failed", error: err.message });
  }
};

export const logoutUsers = async (req, res) => {
  const { id } = req.body;

  try {
    await logoutUserById(id);
    res.json({ message: "Logout successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
