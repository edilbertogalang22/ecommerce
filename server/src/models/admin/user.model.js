import db from "../../config/db.js";

export const getAllUsers = async () => {
  const [users] = await db.query("SELECT * FROM users");
  return users;
};

export const updateUsers = async (
  id,
  firstname,
  lastname,
  address,
  contact,
  email,
) => {
  const sql = `UPDATE users SET firstname = ?, lastname = ?, address = ?, contact = ?, email = ? WHERE id = ?`;

  return db.query(sql, [firstname, lastname, address, contact, email, id]);
};

export const deleteUsers = async (id) => {
  const sql = `DELETE FROM users WHERE id = ?`;

  return db.query(sql, [id]);
};
