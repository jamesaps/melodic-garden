import { useCallback, useContext, useEffect, useTransition } from "react";
import ShopFilterSectionList from "./ShopFilterSectionList";
import ShopFilterSectionRange from "./ShopFilterSectionRange";
import ShopFilterSection from "./ShopFilterSection";
import { ShopFilterContext } from "../contexts/ShopFilterContext";
import { useSearchParams } from "react-router-dom";

export default function ShopFilter() {
  const {
    filterSettings,
    toggleShopFilterSectionListCheckbox,
    setFilterSettings,
    setSliderValue,
    resetFilters,
  } = useContext(ShopFilterContext);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = {};
    filterSettings
      .filter((f) => {
        if (f.type === "list") {
          // check that at least one checkbox is ticked
          return f.options.some((o) => o.checked);
        } else if (f.type === "range") {
          // check if value does not equal max
          return f.value !== f.options.max;
        }

        return false;
      })
      .forEach((f) => {
        if (f.type === "list") {
          params[f.id] = f.options
            .filter((o) => o.checked)
            .map((o) => o.value)
            .join(",");
        } else if (f.type === "range") {
          params[f.id] = f.value;
        }
      });

    setSearchParams(params);
  }, [filterSettings, setSearchParams]);

  useEffect(() => {
    setFilterSettings((oldFilterSettings) => {
      return [...oldFilterSettings].map((setting) => {
        if (!searchParams.has(setting.id)) {
          return setting;
        }

        const newSetting = { ...setting };
        const values = searchParams.get(newSetting.id);

        if (values.length === "") {
          return newSetting;
        }

        const valuesAsArray = values.split(",").map((v) => v.trim());

        if (newSetting.type === "list") {
          newSetting.options = [...newSetting.options].map((option) => {
            if (valuesAsArray.includes(option.value)) {
              const newOption = { ...option, checked: true };
              newSetting.open = true;

              return newOption;
            }

            return option;
          });
        } else if (newSetting.type === "range") {
          const newOptions = { ...newSetting.options };

          valuesAsArray.forEach((value) => {
            if (value.includes("min:")) {
              const minValue = value.replaceAll("min:", "");

              if (!isNaN(minValue) && !isNaN(parseFloat(minValue))) {
                newOptions.min = minValue;
                newSetting.open = true;
              }
            } else if (value.includes("max:")) {
              const maxValue = value.replaceAll("max:", "");

              if (!isNaN(maxValue) && !isNaN(parseFloat(maxValue))) {
                newOptions.max = maxValue;
                newSetting.value = maxValue;
                newSetting.open = true;
              }
            }
          });

          newSetting.options = newOptions;
        }

        return newSetting;
      });
    });
  }, [searchParams, setFilterSettings]);

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
