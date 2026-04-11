import {
  loginUser,
  updateUserStatus,
  logoutUserById,
} from "../models/authModel.js";
import { generateToken } from "../middleware/authMiddleware.js";
import { registerUser } from "../models/authModel.js";

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
  // req.user comes from verifyToken middleware
  const id = req.user.id;
  console.log("Logging out user with ID:", id);

  try {
    const result = await logoutUserById(id); // sets status = 0
    console.log("DB Result:", result);
    res.json({ message: "Logout successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const registerUsers = async (req, res) => {
  const { firstname, lastname, address, contact, email, password, status } =
    req.body;

  try {
    await registerUser({
      firstname,
      lastname,
      address,
      contact,
      email,
      password,
      status,
      user_type: 2,
    });
    res.json({ message: "Registration successful" });
  } catch (err) {
    if (err.message === "Email already exists") {
      return res.status(400).json({ message: err.message });
    }

    if (
      err.message === "Email and password are required" ||
      err.message === "Password must be at least 6 characters long"
    ) {
      return res.status(400).json({ message: err.message });
    }

    // check if email already exists mysql error handler
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(400).json({ message: "Email already registered" });
    }
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
