import { registerUser, loginUser } from "../services/auth.service.js";
import asyncHandler from "../utils/asyncHandler.js";

const register = asyncHandler(async (req, res) => {
  const data = await registerUser(req.body);
  const { token, user } = data;

  const { username, email, _id } = user;

  res.status(201).json({
    message: "User registered successfully",
    token,
    user: { username, email, _id },
  });
});

const login = asyncHandler(async (req, res) => {
  const data = await loginUser(req.body);
  const { token, user } = data;

  const { username, email, _id } = user;

  res.status(200).json({
    message: "User logged in successfully",
    token,
    user: { username, email, _id },
  });
});

export { register, login };
