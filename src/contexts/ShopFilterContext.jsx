import { createContext } from "react";

export const ShopFilterContext = createContext({
  filterSettings: [],
  toggleShopFilterSectionListCheckbox: () => {},
  setFilterSettings: (settings) => {},
  setSliderValue: (value) => {},
  resetFilters: () => {},
});
