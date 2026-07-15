import axios from 'axios';

/**
 * Centralized Axios instance with:
 * - Base URL configuration
 * - Request interceptor to attach JWT token
 * - Response interceptor for global error handling & token refresh
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Request interceptor — attach auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor — handle global errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;

    // Handle 401 Unauthorized — token expired or invalid
    if (response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }

    // Handle 403 Forbidden — insufficient permissions
    if (response?.status === 403) {
      console.error('Access denied: insufficient permissions');
    }

    return Promise.reject(error);
  }
);

export default api;