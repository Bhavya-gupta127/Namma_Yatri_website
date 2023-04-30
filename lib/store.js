import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      token: "",
      name: "",
      src: [],
      dst: [],
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

      setToken: (token) =>
        set((state) => ({
          ...state,
          token: token,
        })),
      //map //manual markers
      // pickLocation: "",
      // setPickLocation: (pickLocation) =>
      //   set((state) => ({
      //     ...state,
      //     pickLocation: pickLocation,
      //   })),
      // DropLocation: "",
      // setDropLocation: (dropLocation) =>
      //   set((state) => ({
      //     ...state,
      //     dropLocation: dropLocation,
      //   })),
    }),
    {
      name: "namma-yatri",
      partialize: (state) => ({ token: state.token, name: state.name }),
    }
  )
);

export default useStore;
