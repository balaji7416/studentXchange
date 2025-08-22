import axios from "axios";

// const base_url = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
