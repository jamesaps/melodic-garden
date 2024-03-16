import { useContext } from "react";
import ShopFilterSectionList from "./ShopFilterSectionList";
import ShopFilterSectionRange from "./ShopFilterSectionRange";
import ShopFilterSection from "./ShopFilterSection";
import { ShopFilterContext } from "../contexts/ShopFilterContext";

export default function ShopFilter() {
  const {
    filterSettings,
    toggleShopFilterSectionListCheckbox,
    setSliderValue,
  } = useContext(ShopFilterContext);

  return (
    <form className="hidden lg:block">
      {Object.values(filterSettings).map((section) => {
        if (section.type === "list") {
          return (
            <ShopFilterSection key={section.id} section={section}>
              <ShopFilterSectionList
                key={section.id}
                section={section}
                toggleShopFilterSectionListCheckbox={
                  toggleShopFilterSectionListCheckbox
                }
              />
            </ShopFilterSection>
          );
        } else if (section.type === "range") {
          return (
            <ShopFilterSection key={section.id} section={section}>
              <ShopFilterSectionRange
                section={section}
                setSliderValue={setSliderValue}
              />
            </ShopFilterSection>
          );
        }
      })}
    </form>
  );
}
