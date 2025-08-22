const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  if (process.env.NODE_ENV == "development") {
    console.log("error: ", err);
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
      stack: err.stack,
      error: err,
    });
  }

  res.status(statusCode).json({
    statusCode,
    message,
    success: false,
  });
};

export default errorHandler;
