import ApiError from "./ApiError";

const handleApiError = (error) => {
  if (error.response) {
    const statusCode = error.response.statusCode;
    const data = error.response.data.message;
    throw new ApiError(statusCode, data);
  } else if (error.request) {
    throw new ApiError(503, "NO response from server");
  } else {
    throw new ApiError(500, "Internal server error");
  }
};

export default handleApiError;
