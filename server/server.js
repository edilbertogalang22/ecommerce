import dotenv from "dotenv";
dotenv.config();

import { logSuccess, logInfo, logError } from "./src/utils/logger.js";
import express from "express";
import cors from "cors";
import db from "./src/config/db.js";

// import routes
import authRoute from "./src/routes/authRoute.js";
import adminRoute from "./src/routes/adminRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
// app.get("/", (req, res) => res.send("Hello from the server!"));

// Routes
app.use("/api/auth", authRoute);
app.use("/api/auth", adminRoute);
// Start the server
async function startServer() {
  try {
    await db.query("SELECT 1");
    logSuccess("Database reachable. Starting server...");

    const server = app.listen(PORT, () => {
      logInfo(`Server is running on http://localhost:${PORT}`);
    });

    process.on("SIGINT", async () => {
      logInfo("\nShutting down server...");
      await db.end();
      server.close(() => {
        logSuccess("Server stopped.");
        process.exit(0);
      });
      setTimeout(() => process.exit(0), 5000); // fallback after 5s
    });
  } catch (err) {
    logError("Failed to connect to DB:", err);
    process.exit(1);
  }
}

startServer();
