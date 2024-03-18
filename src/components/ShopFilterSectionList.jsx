export default function ShopFilterSectionList({
  section,
  toggleShopFilterSectionListCheckbox,
  mobile = false,
}) {
  if (mobile) {
    return (
      <>
        {section.options.map((option, optionIdx) => (
          <div key={option.value} className="flex items-center">
            <input
              id={`filter-mobile-${section.id}-${optionIdx}`}
              name={`${section.id}[]`}
              type="checkbox"
              checked={option.checked}
              className="h-4 w-4 rounded border-gray-300 text-mid-green focus:ring-mid-green"
              onChange={() => {
                toggleShopFilterSectionListCheckbox({
                  sectionId: section.id,
                  item: option.value,
                });
              }}
            />
            <label
              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
              className="ml-3 min-w-0 flex-1 text-gray-500"
            >
              {option.label}
            </label>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        {section.options.map((option, optionIdx) => (
          <div key={option.value} className="flex items-center">
            <input
              id={`filter-${section.id}-${optionIdx}`}
              name={`${section.id}[]`}
              type="checkbox"
              checked={option.checked}
              className="checkbox h-4 w-4 rounded border-gray-300 text-mid-green focus:ring-mid-green"
              onChange={() => {
                toggleShopFilterSectionListCheckbox({
                  sectionId: section.id,
                  item: option.value,
                });
              }}
            />
            <label
              htmlFor={`filter-${section.id}-${optionIdx}`}
              className="ml-3 text-sm text-gray-600"
            >
              {option.label}
            </label>
          </div>
        ))}
      </>
    );
  }
}
