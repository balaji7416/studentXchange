import express from "express";
import protectRoute from "../middlewares/auth.middleware.js";
import upload from "../middlewares/upload.middleware.js";

import {
  getAllads,
  getUserAds,
  deleteAd,
  createAd,
} from "../controllers/ads/index.js";

const router = express.Router();

router.get("/", getAllads);
router.get("/:id", protectRoute, getUserAds);
router.post("/", protectRoute, upload.array("images"), createAd);
router.delete("/:id", protectRoute, deleteAd);

export default router;
