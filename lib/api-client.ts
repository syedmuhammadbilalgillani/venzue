import axios from "axios";
import { useAuthStore } from "@/store/auth-store";

export const apiClient = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_REQRES_API_KEY ?? "",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
