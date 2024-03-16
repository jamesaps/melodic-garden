import { Dialog, Menu, Transition } from "@headlessui/react";
import ShopFilter from "../ShopFilter";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import ShopFilterSection from "../ShopFilterSection";

import { ShopFilterContext } from "../../contexts/ShopFilterContext";
import testFilterData from "./../../test-filters.json";
import MobileShopFilterDialog from "../MobileShopFilterDialog";

export default function Shop() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
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
    <ShopFilterContext.Provider
      value={{
        filterSettings,
        toggleShopFilterSectionListCheckbox,
        setSliderValue,
      }}
    >
      {/* Mobile filter dialog */}
      <MobileShopFilterDialog
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="pt-24 text-center text-xl font-bold text-gray-900">
          SHOP ALL PLANTS
        </h1>

        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 ">
          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {/* {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current
                                  ? "font-medium text-gray-900"
                                  : "text-gray-500",
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm",
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))} */}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              type="button"
              className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
            >
              <span className="sr-only">View grid</span>
              <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <ShopFilter />

            {/* Product grid */}
            <div className="lg:col-span-3">{/* Your content */}</div>
          </div>
        </section>
      </main>
    </ShopFilterContext.Provider>
  );
}
