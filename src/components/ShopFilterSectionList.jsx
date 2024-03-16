export default function ShopFilterSectionList({
  section,
  toggleShopFilterSectionListCheckbox,
}) {
  return (
    <>
      {section.options.map((option, optionIdx) => (
        <div key={option.value} className="flex items-center">
          <input
            id={`filter-${section.id}-${optionIdx}`}
            name={`${section.id}[]`}
            defaultValue={option.value}
            type="checkbox"
            defaultChecked={option.checked}
            className="checkbox text-mid-green focus:ring-mid-green h-4 w-4 rounded border-gray-300"
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
