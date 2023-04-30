import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      token: "",
      name: "",
      src: [],
      dst: [],
      srcName: "",
      dstName: "",
      rides: [],
      rideDetails: {},

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

      setSrcName: (srcName) =>
        set((state) => ({
          ...state,
          srcName,
        })),

      setDstName: (dstName) =>
        set((state) => ({
          ...state,
          dstName,
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

      setRideDetails: (rideDetails) => 
        set((state) => ({
          ...state,
          rideDetails,
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
