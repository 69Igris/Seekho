import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL ;

const api = axios.create({
  baseURL: `${API_BASE}/api`,
});

export const signup = (data) => api.post("/auth/signup", data);
export const login = (data) => api.post("/auth/login", data);

export default api;
