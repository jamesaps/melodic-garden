import { createContext } from "react";

export const ShopFilterContext = createContext({
  filterSettings: [],
  toggleShopFilterSectionListCheckbox: () => {},
  setSliderValue: () => {},
  resetFilters: () => {},
});
