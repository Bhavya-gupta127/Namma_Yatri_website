import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      token: "",
      name: "",
      src: [],
      dst: [],
      rides: [],
      setSrc: (src) =>
        set((state) => ({
          ...state,
          src,
        })),

      setDst: (dst) =>
        set((state) => ({
          ...state,
          dst,
        })),

      setName: (name) =>
        set((state) => ({
          ...state,
          name: name,
        })),

      setRides: (rides) =>
        set((state) => ({
          ...state,
          rides,
        })),

      setToken: (token) =>
        set((state) => ({
          ...state,
          token: token,
        })),
    }),
    {
      name: "namma-yatri",
      partialize: (state) => ({
        token: state.token,
        name: state.name,
        rides: state.rides,
      }),
    }
  )
);

export default useStore;
