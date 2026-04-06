import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({
      success: false,
      message: "not authorized"
    });
  }

  try {
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.json({
        success: false,
        message: "not authorized"
      });
    }

    req.user = user;

    next();

  } catch (error) {
    return res.json({
      success: false,
      message: "not authorized"
    });
  }
};