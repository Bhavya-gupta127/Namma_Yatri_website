import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      token: "",
      name: "",
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
        //map 
        pickLocation: "",
        setPickLocation: (pickLocation) =>
          set((state) => ({
            ...state,
            pickLocation: pickLocation,
          })),
        DropLocation: "",
        setDropLocation: (dropLocation) =>
          set((state) => ({
            ...state,
            dropLocation: dropLocation,
          })),

      }),
      {
        name: "namma-yatri",
      }
      )
);

export default useStore;
