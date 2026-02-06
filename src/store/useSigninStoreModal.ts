import { create } from "zustand";

type typeUseSigninStoreModal = {
  isOpen: boolean;
  openSigninModal: () => void;
  closeSigninModal: () => void;
};

export const useSigninStoreModal = create<typeUseSigninStoreModal>((set) => ({
  isOpen: false,
  openSigninModal: () => set({ isOpen: true }),
  closeSigninModal: () => set({ isOpen: false }),
}));
