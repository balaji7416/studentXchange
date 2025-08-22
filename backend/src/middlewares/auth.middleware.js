import ApiError from "../utils/ApiError.js";
import { verifyToken } from "../utils/token.service.js";

const protectRoute = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith("Bearer")) {
      throw new ApiError("401", "authorization token missing");
    }

    const token = header.split(" ")[1];
    const decoded = verifyToken(token);

    const { userId } = decoded;
    req.user = { userId };
    next();
  } catch (err) {
    next(new ApiError("401", err.message));
  }
};

export default protectRoute;
