import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type Store = {
  userId: string;
  lastEmail: string;
  email: string;
  token: string;
  actions: {
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    resetState: () => void;
  };
};

const testUserEmail = "test@test.com";
const testUserPassword = "test";
const testUserId = "test-01";
const testToken = "12345";

const useAuthStore = create<Store>()(
  persist(
    immer(
      devtools((set) => ({
        userId: "",
        lastEmail: "",
        email: "",
        token: "",

        actions: {
          login: async (email, password) => {
            await new Promise((resolve) => setTimeout(resolve, 1500));

            if (email !== testUserEmail || password !== testUserPassword) {
              throw new Error("Invalid credentials");
            }

            set((state) => {
              state.userId = testUserId;
              state.lastEmail = email;
              state.email = email;
              state.token = testToken;
            });
          },

          logout: () => {
            set((state) => {
              state.userId = "";
              state.email = "";
              state.token = "";
            });
          },

          resetState: () => {
            set(() => ({
              userId: "",
              lastEmail: "",
              email: "",
              token: "",
            }));
          },
        },
      }))
    ),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => {
        const { actions, ...rest } = state;
        return rest;
      },
    }
  )
);

export const getAuthStore = () => useAuthStore.getState();
export const getAuthStorePersist = () => useAuthStore.persist;
export const useAuthStoreEmail = () => useAuthStore((state) => state.email);
export const useAuthStoreLastEmail = () =>
  useAuthStore((state) => state.lastEmail);
export const useAuthStoreToken = () => useAuthStore((state) => state.token);
export const useAuthStoreActions = () => useAuthStore((state) => state.actions);
