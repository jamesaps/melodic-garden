import { useState } from "react";
import ShopFilterSectionList from "./ShopFilterSectionList";
import ShopFilterSectionRange from "./ShopFilterSectionRange";
import ShopFilterSection from "./ShopFilterSection";
import testFilterData from "./../test-filters.json";

export default function ShopFilter() {
  const [filterSettings, setFilterSettings] = useState(testFilterData);

  const toggleShopFilterSectionListCheckbox = ({ sectionId, item }) => {
    setFilterSettings((previousFilterSettings) => {
      const updatedFilterSettings = [...previousFilterSettings];
      const sectionFilterIndex = updatedFilterSettings.findIndex(
        (filterSetting) => filterSetting.id === sectionId,
      );

      updatedFilterSettings[sectionFilterIndex] = {
        ...updatedFilterSettings[sectionFilterIndex],
        options: updatedFilterSettings[sectionFilterIndex].options.map(
          (option) => {
            if (option.value !== item) {
              return { ...option };
            }

            return { ...option, checked: !option.checked };
          },
        ),
      };

      return updatedFilterSettings;
    });
  };

  const setSliderValue = ({ sectionId, value }) => {
    setFilterSettings((previousFilterSettings) => {
      const updatedFilterSettings = [...previousFilterSettings];
      const sectionFilterIndex = updatedFilterSettings.findIndex(
        (filterSetting) => filterSetting.id === sectionId,
      );

      const min = filterSettings[sectionFilterIndex].options.min;
      const max = filterSettings[sectionFilterIndex].options.max;

      if (value > max) {
        updatedFilterSettings[sectionFilterIndex].value = max;
      } else if (value < min) {
        updatedFilterSettings[sectionFilterIndex].value = min;
      } else {
        updatedFilterSettings[sectionFilterIndex].value = value;
      }

      return updatedFilterSettings;
    });
  };

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
