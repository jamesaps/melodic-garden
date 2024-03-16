export default function ShopFilterSectionRange({ section, setSliderValue }) {
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);

    setSliderValue({ sectionId: section.id, value: newValue });
  };

  return (
    <>
      <input
        type="range"
        min={section.options.min}
        max={section.options.max}
        value={section.value}
        onChange={handleChange}
        className="accent-mid-green w-full"
      />

      <p className="text-right text-sm italic">Up to £{section.value}</p>
    </>
  );
}
