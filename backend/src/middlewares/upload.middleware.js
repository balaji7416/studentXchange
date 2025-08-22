import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "ISMart-ads",
    allowdeFormat: ["jpg", "png", "jpeg", "webp"],
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 6 },
}); // 6MB

export default upload;
