import db from "../../config/db.js";

export const getUsersProfile = async (id) => {
  const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
  return rows;
};
