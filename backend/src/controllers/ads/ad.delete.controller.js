import asyncHandler from "../../utils/asyncHandler.js";
import AdModel from "../../models/AdModel.js";
import ApiError from "../../utils/ApiError.js";
import cloudinary from "../../config/cloudinary.js";

const deleteAd = asyncHandler(async (req, res) => {
  const ad = await AdModel.findById(req.params.id);

  if (!ad) {
    throw new ApiError(404, "Ad not found");
  }

  if (ad.user.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized to delete this ad");
  }

  for (let img of images) {
    cloudinary.uploader.destroy(ad.public_id);
  }

  await ad.remove();
  res.status(200).json({
    message: "Ad deleted successfully",
    ad,
  });
});

export default deleteAd;
