import { create } from "zustand";

type typeUseMenuModalStore = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useMenuModalStore = create<typeUseMenuModalStore>((set) => ({
  isOpen: false,
  openModal: () => {
    set({ isOpen: true });
  },
  closeModal: () => {
    set({ isOpen: false });
  },
}));
