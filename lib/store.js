import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      token: "",
      setToken: (token) =>
        set((state) => ({
          ...state,
          token: token,
        })),
    }),
    {
      name: "namma-yatri",
    }
  )
);

export default useStore;
