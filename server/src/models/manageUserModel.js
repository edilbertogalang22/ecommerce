import db from "../config/db.js";

export const getAllUsers = async () => {
  const [users] = await db.query("SELECT * FROM users");
  return users;
};
