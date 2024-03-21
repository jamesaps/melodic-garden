import { Menu, Transition } from "@headlessui/react";
import ShopFilter from "../ShopFilter";
import { Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from "react";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ProductCard from "../ProductCard";
import { ShopFilterContext } from "../../contexts/ShopFilterContext";
import testFilterData from "./../../test-filters.json";
import MobileShopFilterDialog from "../MobileShopFilterDialog";
import { useProducts } from "../../hooks/useProducts";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Shop() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filterSettings, setFilterSettings] = useState(testFilterData);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOptions, setSortOptions] = useState([
    { name: "Most Popular", value: "popular", current: false },
    { name: "Newest", value: "new", current: false },
    { name: "Price: Low to High", value: "price-low", current: false },
    { name: "Price: High to Low", value: "price-high", current: false },
  ]);

  const { products } = useProducts();

  const filterPlants = useCallback(
    (plantsData) => {
      return filterSettings.reduce((filteredPlants, filter) => {
        if (filter.type === "list") {
          if (
            filter.options.every((option) => option.checked) ||
            filter.options.every((option) => !option.checked)
          ) {
            return filteredPlants;
          }

          const checkedOptions = filter.options
            .filter((f) => f.checked)
            .map((f) => f.value.toLowerCase());

          return filteredPlants.filter(
            (plant) =>
              plant[filter.name] === undefined ||
              checkedOptions.includes(plant[filter.name].toLowerCase()),
          );
        } else if (filter.type === "range") {
          return filteredPlants.filter((plant) => {
            return (
              plant[filter.name] === undefined ||
              (plant[filter.name] >= filter.options.min &&
                plant[filter.name] <= filter.value)
            );
          });
        } else {
          return filteredPlants;
        }
      }, plantsData);
    },
    [filterSettings],
  );

  const sortPlants = useCallback(
    (plantsData) => {
      const sortOption = sortOptions.find((s) => s.current);

      if (sortOption === undefined) {
        return plantsData;
      }

      switch (sortOption.value) {
        case "popular":
          return plantsData;
        case "new":
          return plantsData;
        case "price-low":
          return plantsData.sort((p1, p2) => p1.Price - p2.Price);
        case "price-high":
          return plantsData.sort((p1, p2) => p2.Price - p1.Price);
        default:
          return plantsData;
      }
    },
    [sortOptions],
  );

  useEffect(() => {
    const updatedProducts = [...products].map((product) => ({ ...product }));
    const updatedProductsFilteredAndSorted = sortPlants(
      filterPlants(updatedProducts),
    );

    setFilteredProducts(updatedProductsFilteredAndSorted);
  }, [products, filterPlants, sortPlants]);

  const resetFilters = () => {
    setFilterSettings((previousFilterSettings) => {
      const updatedFilterSettings = [...previousFilterSettings];

      for (const filter of updatedFilterSettings) {
        if (filter.type === "list") {
          filter.options = filter.options.map((option) => ({
            ...option,
            checked: false,
          }));
        } else if (filter.type === "range") {
          filter.value = filter.options.max;
        }
      }

      return updatedFilterSettings;
    });
  };

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

  const handleSortOptionChange = ({ option }) => {
    setSortOptions((sortOptions) => {
      const updatedSortOptions = [...sortOptions].map((sortOptionsDetails) => {
        const updatedSortOptionsDetails = { ...sortOptionsDetails };

        if (sortOptionsDetails.name === option) {
          updatedSortOptionsDetails.current = true;
        } else {
          updatedSortOptionsDetails.current = false;
        }

        return updatedSortOptionsDetails;
      });

      return updatedSortOptions;
    });
  };

  return (
    <ShopFilterContext.Provider
      value={{
        filterSettings,
        toggleShopFilterSectionListCheckbox,
        setFilterSettings,
        setSliderValue,
        resetFilters,
      }}
    >
      {/* Mobile filter dialog */}
      <MobileShopFilterDialog
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
      />

      <main className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="mt-32 text-center text-xl font-bold text-gray-900">
          SHOP ALL PLANTS
        </h1>

        <div className="my-6 flex items-baseline justify-end border-gray-200">
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
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <p
                            className={classNames(
                              option.current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block cursor-pointer px-4 py-2 text-sm",
                            )}
                            onClick={() =>
                              handleSortOptionChange({ option: option.name })
                            }
                          >
                            {option.name}
                          </p>
                        )}
                      </Menu.Item>
                    ))}
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

        <section aria-labelledby="products-heading" className="pb-24">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <ShopFilter />

            {/* Product grid */}
            <div className="grid gap-4 lg:col-span-3 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <div className="lg:col-span-1" key={product.Id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </ShopFilterContext.Provider>
  );
}
