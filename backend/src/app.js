import express from "express";
import cors from "cors";
import morgan from "morgan";
import errorHandler from "./middlewares/error.middleware.js";
import ApiError from "./utils/ApiError.js";

import authRouter from "./routes/auth.routes.js";
import adRouter from "./routes/ad.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api/auth", authRouter);
app.use("/api/ad", adRouter);

app.use((req, res, next) => {
  next(new ApiError(404, "route not found"));
});

app.use(errorHandler);

export default app;
