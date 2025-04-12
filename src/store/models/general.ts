import { StateCreator } from "zustand";
import { MergedStoreModel } from "./types";

export interface GeneralModel {
  // valori
  isThemeLoaded: boolean;
  // azioni
  setIsThemeLoaded: (isThemeLoaded: boolean) => void;
}

export const createGeneralStore: StateCreator<
  MergedStoreModel,
  [],
  [],
  GeneralModel
> = (set) => ({
  isThemeLoaded: false,

  /**
   * Modifica se i font sono stati caricati
   */
  setIsThemeLoaded: (isThemeLoaded) => set({ isThemeLoaded }),
});
