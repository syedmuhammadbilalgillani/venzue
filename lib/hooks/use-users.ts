import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import type { UsersResponse } from "@/types/user";

export function useUsers(page: number) {
  return useQuery({
    queryKey: ["users", page],
    queryFn: async () => {
      const { data } = await apiClient.get<UsersResponse>("/users", {
        params: { page },
      });
      return data;
    },
  });
}
