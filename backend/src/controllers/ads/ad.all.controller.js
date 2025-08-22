import AdModel from "../../models/AdModel.js";
import asyncHandler from "../../utils/asyncHandler.js";
import ApiError from "../../utils/ApiError.js";

const getAllads = asyncHandler(async (req, res) => {
  const { category, title, Minprice, Maxprice, location, sort } = req.query;

  const query = { status: "active" };

  if (category) query.category = { $regex: category, $options: "i" };
  if (location) query.location = { $regex: location, $options: "i" };
  if (title) query.title = { $regex: title, $options: "i" };

  if (Minprice || Maxprice) query.price = {};
  if (Minprice) query.price.$gte = Number(Minprice);
  if (Maxprice) query.price.$lte = Number(Maxprice);

  const sortObj = {};
  if (sort) {
    const [field, order] = sort.split("_");
    sortObj[field] = order === "asc" ? 1 : -1;
  } else {
    sortObj.createdAt = -1;
  }

  const ads = await AdModel.find(query).sort(sortObj);

  if (ads.length === 0) {
    throw new ApiError(404, "No ads found");
  }

  res.status(200).json({
    message: `fetched all ads with filters: ${JSON.stringify(req.query)}`,
    ads,
  });
});

export default getAllads;
