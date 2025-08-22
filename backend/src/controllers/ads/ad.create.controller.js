import asyncHandler from "../../utils/asyncHandler.js";
import AdModel from "../../models/AdModel.js";
import ApiError from "../../utils/ApiError.js";

const createAd = asyncHandler(async (req, res) => {
  if (!req.body) {
    throw new ApiError(400, "Ad data is required");
  }
  if (!req.files || req.files.length === 0) {
    throw new ApiError(400, "Image is required");
  }

  // Validate that req.user exists and contains userId
  if (!req.user || !req.user.userId) {
    throw new ApiError(401, "User is required. Please log in.");
  }

  const images = req.files.map((file) => ({
    url: file.path,
    public_id: file.filename,
  }));

  const { category, type, title, description, price, location } = req.body;
  const { userId } = req.user;

  try {
    const ad = await AdModel.create({
      category,
      type,
      title,
      description,
      price,
      images,
      location,
      user: userId,
    });

    res.status(201).json({
      message: "Ad created successfully",
      ad,
    });
  } catch (error) {
    throw new ApiError(500, `Failed to create ad: ${error.message}`);
  }
});

export default createAd;
