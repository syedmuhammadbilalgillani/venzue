import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
  email: string | null;
  isAuthenticated: boolean;
  login: (token: string, email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      email: null,
      isAuthenticated: false,
      login: (token, email) => {
        document.cookie = `venuze-token=${token}; path=/; max-age=604800; SameSite=Lax`;
        set({ token, email, isAuthenticated: true });
      },
      logout: () => {
        document.cookie = "venuze-token=; path=/; max-age=0";
        set({ token: null, email: null, isAuthenticated: false });
      },
    }),
    {
      name: "venuze-auth",
    }
  )
);
