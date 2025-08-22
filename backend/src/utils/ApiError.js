//this is a custom error
class ApiError extends Error {
  constructor(statusCode, message) {
    super(message); // sets the message property of the Error object
    this.statusCode = statusCode; // sets the statusCode property of the Error object
    this.success = false;

    Error.captureStackTrace(this, this.constructor); // to remove this constructor in error message
  }
}

export default ApiError;
