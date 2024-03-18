export default function ShopFilterSectionRange({
  section,
  setSliderValue,
  mobile = true,
}) {
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);

    setSliderValue({ sectionId: section.id, value: newValue });
  };

  if (mobile) {
    return (
      <>
        <input
          type="range"
          min={section.options.min}
          max={section.options.max}
          value={section.value}
          onChange={handleChange}
          className="w-full accent-mid-green"
        />

        <p className="text-right text-sm italic">Up to £{section.value}</p>
      </>
    );
  } else {
    return (
      <>
        <input
          type="range"
          min={section.options.min}
          max={section.options.max}
          value={section.value}
          onChange={handleChange}
          className="w-full accent-mid-green"
        />

        <p className="text-right text-sm italic">Up to £{section.value}</p>
      </>
    );
  }
}
