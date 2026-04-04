import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    user_type: user.user_type,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export const verifyToken = (allowedRoles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer "))
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });

    const token = authHeader.split(" ")[1];
    if (!token)
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token format" });
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      // Check if user role is allowed
      if (
        allowedRoles.length > 0 &&
        !allowedRoles.includes(decoded.user_type)
      ) {
        return res
          .status(403)
          .json({ message: "Forbidden: Insufficient permissions" });
      }

      next();
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Unauthorized: Token expired" });
      }

      if (err.name === "JsonWebTokenError") {
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
      }

      console.error("Unexpected token error:", err);
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  };
};
