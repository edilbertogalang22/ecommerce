import dotenv from "dotenv";
dotenv.config();

import { logSuccess, logInfo, logError } from "./src/utils/logger.js";
import express from "express";
import cors from "cors";
import db from "./src/config/db.js";

console.log("PROFILE ROUTE LOADED")

// admin routes
import authRoute from "./src/routes/auth.routes.js";
import dashboardRoute from "./src/routes/admin/dashboard.routes.js";
import userRoutes from "./src/routes/admin/user.routes.js";
import productRoutes from "./src/routes/admin/product.routes.js";
import categoryRoutes from "./src/routes/admin/category.routes.js";

// user routes
import productRoutesUser from "./src/routes/users/product.routes.js";
import userProfileRoutes from "./src/routes/users/userprofile.routes.js";
import cartRoutes from "./src/routes/users/cart.routes.js";

// public routes
import productRoutesPublic from "./src/routes/product.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
// app.get("/", (req, res) => res.send("Hello from the server!"));

// Admin Routes
app.use("/api/auth", authRoute);
app.use("/api/admin", dashboardRoute);
app.use("/api/admin/manage-users", userRoutes);
app.use("/api/admin/products", productRoutes);
app.use("/api/admin/categories", categoryRoutes);

// User Routes
app.use("/api/users/products", productRoutesUser);
app.use("/api/users/profile", userProfileRoutes);
app.use("/api/users/cart", cartRoutes);

// Public Routes
app.use("/api/products", productRoutesPublic);

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
