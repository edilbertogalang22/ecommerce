import { getAllUsers } from "../models/manageUserModel.js";

export const fetchAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "failed to fetch users", error: err.message });
  }
};

