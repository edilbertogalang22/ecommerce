import db from "../config/db.js";
import bcrypt from "bcrypt";

export const loginUser = async ({ email, password }) => {
  const sql = `SELECT * FROM users WHERE email = ?`;
  const [rows] = await db.query(sql, [email]);

  if (rows.length === 0) return null;

  const user = rows[0];

  const match = await bcrypt.compare(password, user.password);

  if (!match) return null;

  return user;
};

export const updateUserStatus = async (id, status) => {
  const sql = "UPDATE users SET status = ? WHERE id = ?";
  return db.query(sql, [status, id]);
};

export const logoutUserById = async (id) => {
  const sql = "UPDATE users SET status = ? WHERE id = ?";
  const [result] = await db.query(sql, [0, id]); // sets status to 0
  return result;
};

export const registerUser = async ({
  firstname,
  lastname,
  address,
  contact,
  email,
  password,
}) => {
  const [existingemail] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
  );

  if (existingemail.length > 0) {
    throw new Error("Email already exists");
  }

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  if (password.length < 6) {
    throw new Error("Password must be at least 6 characters long");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql = `INSERT INTO users 
  (firstname, lastname, address, contact, email, password, status, user_type) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  return db.query(sql, [
    firstname,
    lastname,
    address,
    contact,
    email,
    hashedPassword,
    0,
    2,
  ]);
};
