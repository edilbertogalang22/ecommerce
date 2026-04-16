import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

let isLoggingOut = false;

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401 && window.location.pathname.startsWith("/admin")) {
      window.location.href = "/login";
    }

    if (status === 401 && !isLoggingOut) {
      isLoggingOut = true;

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      console.warn("Unauthorized request (401) - user logged out");
    }

    return Promise.reject(error);
  },
);

export default api;
