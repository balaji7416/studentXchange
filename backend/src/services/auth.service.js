import ApiError from "../utils/ApiError.js";
import { generateToken } from "../utils/token.service.js";
import UserModel from "../models/UserModel.js";

const registerUser = async ({ username, email, password }) => {
  if (!username || !email || !password) {
    throw new ApiError(400, "Please provide all the fields");
  }

  const existingUser = await UserModel.findOne({ email });

  if (existingUser) throw new ApiError(400, "User already exists");

  const user = await UserModel.create({ username, email, password });
  const token = generateToken(user);

  return { token, user };
};

const loginUser = async ({ email, password }) => {
  if (!email || !password) {
    throw new ApiError(400, "Please provide all the fields");
  }

  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new ApiError(404, "user not found");
  }

  const verifyPassword = await user.comparePassword(password);
  if (!verifyPassword) throw new ApiError(400, "Invalid credentials");

  const token = generateToken(user);
  return { token, user };
};

export { registerUser, loginUser };
