import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react/jsx-runtime";
import ShopFilterSection from "./ShopFilterSection";
import { useContext } from "react";
import { ShopFilterContext } from "../contexts/ShopFilterContext";
import ShopFilterSectionRange from "./ShopFilterSectionRange";
import ShopFilterSectionList from "./ShopFilterSectionList";

export default function MobileShopFilterDialog({
  mobileFiltersOpen,
  setMobileFiltersOpen,
}) {
  const {
    filterSettings,
    toggleShopFilterSectionListCheckbox,
    setSliderValue,
    resetFilters,
  } = useContext(ShopFilterContext);

  return (
    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40 lg:hidden"
        onClose={setMobileFiltersOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2font-medium text-gray-900">
                  {/* {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))} */}
                </ul>

                <div className="flex justify-end pb-3 pe-3">
                  <div
                    className="cursor-pointer italic text-gray-500"
                    onClick={() => {
                      resetFilters();
                    }}
                  >
                    Reset
                  </div>
                </div>
                <div className="border-mid-green border-t">
                  {filterSettings.map((section) => {
                    if (section.type === "list") {
                      return (
                        <ShopFilterSection
                          key={section.id}
                          section={section}
                          mobile={true}
                        >
                          <ShopFilterSectionList
                            key={section.id}
                            section={section}
                            toggleShopFilterSectionListCheckbox={
                              toggleShopFilterSectionListCheckbox
                            }
                            mobile={true}
                          />
                        </ShopFilterSection>
                      );
                    } else if (section.type === "range") {
                      return (
                        <ShopFilterSection
                          key={section.id}
                          section={section}
                          mobile={true}
                        >
                          <ShopFilterSectionRange
                            section={section}
                            setSliderValue={setSliderValue}
                            mobile={true}
                          />
                        </ShopFilterSection>
                      );
                    }
                  })}
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
