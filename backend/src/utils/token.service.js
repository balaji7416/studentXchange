import jwt from "jsonwebtoken";
import ApiError from "./ApiError.js";
import dotenv from "dotenv";

dotenv.config();
const generateToken = (user) => {
  const payload = {
    userId: user._id,
    isAdmin: user.isAdmin,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2d" });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (err) {
    throw new ApiError("401", "token is invalid or expired");
  }
};

export { generateToken, verifyToken };
