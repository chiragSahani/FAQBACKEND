import { verify } from "jsonwebtoken";

/**
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.startsWith("Bearer ") ? authHeader.slice(7, authHeader.length) : null;
 * and attaches the decoded user information to the request object.
 * If the token is missing or invalid, it responds with an error.
 */
export default (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.startsWith("Bearer ") ? authHeader.slice(7, authHeader.length) : null;
  if (!token) return res.status(401).json({ message: "No Token Provided" });

  try {
    const verified = verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      res.status(401).json({ message: "Token has expired" });
    } else if (err.name === 'JsonWebTokenError') {
      res.status(400).json({ message: "Invalid Token" });
    } else {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
};
