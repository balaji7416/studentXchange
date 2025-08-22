import api from "../utils/axiosInstance";

const postAd = (FormData, onUploadProgress) => {
  api.post("/ad", FormData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress: (ProgressEvent) => {
      if (onUploadProgress) {
        const percent = Math.round(
          (ProgressEvent.loaded * 100) / ProgressEvent.total
        );
        onUploadProgress(percent);
      }
    },
  });
};

export default postAd;
