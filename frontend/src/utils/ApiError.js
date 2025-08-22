class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode || 500;
    this.message = message || "Internal Server Error";
  }
}

export default ApiError;
