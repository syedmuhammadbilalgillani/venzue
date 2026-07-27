import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { apiClient } from "@/lib/api-client";
import { useAuthStore } from "@/store/auth-store";
import type { ApiErrorResponse, LoginRequest, LoginResponse } from "@/types/auth";

export function useLogin() {
  const login = useAuthStore((s) => s.login);

  return useMutation({
    mutationFn: async (payload: LoginRequest) => {
      const { data } = await apiClient.post<LoginResponse>("/login", payload);
      return data;
    },
    onSuccess: (data, variables) => {
      login(data.token, variables.email);
    },
  });
}

export function getLoginErrorMessage(error: unknown): string {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data?.error ?? "Something went wrong. Please try again.";
  }
  return "Something went wrong. Please try again.";
}
