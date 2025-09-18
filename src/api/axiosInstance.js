import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL, // from .env
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
});

// console.log("API Base URL:", process.env.REACT_APP_BASE_URL);

// Add token automatically if exists
// axiosInstance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// Handle errors globally
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // redirect to login/logout
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
