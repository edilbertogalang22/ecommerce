import db from "../config/db.js";
import bcrypt from "bcrypt";

export const loginUser = async ({ email, password }) => {
  const sql = `SELECT * FROM users WHERE email = ?`;
  const [rows] = await db.query(sql, [email]);

  if (rows.length === 0) return null;

  const user = rows[0];

  const match = await bcrypt.compare(password, user.password);

  //   console.log("MATCH:", match);
  //   console.log("HASHED PASSWORD:", user.password);
  //   console.log("INPUT:", password);
  if (!match) return null;

  return user;
};

export const updateUserStatus = async (id, status) => {
  const sql = "UPDATE users SET status = ? WHERE id = ?";
  return db.query(sql, [status, id]);
};

export const logoutUserById = async (id) => {
  const sql = "UPDATE users SET status = 0 WHERE id = ?";
  return db.query(sql, [id]);
};
