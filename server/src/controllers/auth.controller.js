import {
  loginUser,
  updateUserStatus,
  logoutUserById,
  registerUser,
} from "../models/auth.model.js";
import { generateToken } from "../middleware/authMiddleware.js";

// 🔹 helper for sending errors
const handleError = (res, err, defaultMessage = "Something went wrong") => {
  console.error(err);

  // custom known errors
  if (
    err.message === "Email already exists" ||
    err.message === "Email and password are required" ||
    err.message === "Password must be at least 6 characters long"
  ) {
    return res.status(400).json({ message: err.message });
  }

  if (err.code === "ER_DUP_ENTRY") {
    return res.status(400).json({ message: "Email already registered" });
  }

  return res.status(500).json({
    message: defaultMessage,
    error: err.message,
  });
};

// 🔹 LOGIN
export const loginUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginUser({ email, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    await updateUserStatus(user.id, 1);

    const token = generateToken(user);

    return res.json({
      token,
      user: {
        id: user.id,
        firstname: user.firstname,
        email: user.email,
        user_type: user.user_type,
      },
    });
  } catch (err) {
    return handleError(res, err, "Login failed");
  }
};

// 🔹 LOGOUT
export const logoutUsers = async (req, res) => {
  const { id } = req.user;

  try {
    await logoutUserById(id);

    return res.json({ message: "Logout successful" });
  } catch (err) {
    return handleError(res, err);
  }
};

// 🔹 REGISTER
export const registerUsers = async (req, res) => {
  const { firstname, lastname, address, contact, email, password } = req.body;

  try {
    await registerUser({
      firstname,
      lastname,
      address,
      contact,
      email,
      password,
      status: 1, // default active
      user_type: 2, // always normal user
    });

    return res.json({ message: "Registration successful" });
  } catch (err) {
    return handleError(res, err);
  }
};
