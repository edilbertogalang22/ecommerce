import bcrypt from "bcrypt";
import db from "./src/config/db.js";

const saltRounds = 10;

async function migratePasswords() {
  try {
    const [users] = await db.query("SELECT id, password FROM users");

    for (const user of users) {
      if (!user.password.startsWith("$2b$")) {
        const hashed = await bcrypt.hash(user.password, saltRounds);
        await db.query("UPDATE users SET password = ? WHERE id = ?", [
          hashed,
          user.id,
        ]);
        console.log(`Updated password for user ${user.id}`);
      } else {
        console.log(`User ${user.id} already hashed`);
      }
    }

    console.log("✅ Password migration complete.");
    process.exit(0);
  } catch (err) {
    console.error("❌ Migration error:", err);
    process.exit(1);
  }
}

migratePasswords();
