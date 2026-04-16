import { getUsersProfile } from "../../models/users/userprofile.model.js";
export const getUserProfile = async (req, res) => {
  try {
    const id = req.user.id; // 🔥 galing sa JWT, hindi params

    const profile = await getUsersProfile(id);

    if (!profile || profile.length === 0) {
      return res.status(404).json({ message: "User profile not found" });
    }

    res.json(profile);
  } catch (err) {
    console.error("Error fetching user profile:", err);
    res.status(500).json({ message: "Error fetching user profile" });
  }
};
