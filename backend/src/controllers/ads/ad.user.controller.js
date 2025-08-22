import AdModel from "../../models/AdModel.js";
import asyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/ApiError.js";

const getUserAds = asyncHandler(async (req, res) => {
  const ads = await AdModel.find(query).sort(sortObj);

  if (ads.length === 0) {
    throw new ApiError(404, "No ads found");
  }

  res.status(200).json({
    message: "fetched user ads",
    ads,
  });
});

export default getUserAds;
