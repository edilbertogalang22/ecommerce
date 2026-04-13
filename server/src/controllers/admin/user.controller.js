import {
  getAllUsers,
  updateUsers,
  deleteUsers,
} from "../../models/admin/user.model.js";

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

// update user
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, address, contact, email } = req.body;

    const result = await updateUsers(
      id,
      firstname,
      lastname,
      address,
      contact,
      email,
    );

    res.json({ message: "User updated successfully", result });
  } catch (err) {
    console.error("Update user error:", err);
    res
      .status(500)
      .json({ message: "Failed to update user", error: err.message });
  }
};

// delete user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await deleteUsers(id);

    res.json({ message: "User deleted successfully", result });
  } catch (err) {
    console.error("Delete user error:", err);
    res
      .status(500)
      .json({ message: "Failed to delete user", error: err.message });
  }
};
