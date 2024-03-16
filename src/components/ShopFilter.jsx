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
    resetFilters,
  } = useContext(ShopFilterContext);

  return (
    <>
      <form className="hidden lg:block">
        <div className="flex justify-end border-b border-mid-green pb-3 pe-3">
          <div
            className="cursor-pointer italic text-gray-500"
            onClick={() => {
              resetFilters();
            }}
          >
            Reset
          </div>
        </div>

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
    </>
  );
}
