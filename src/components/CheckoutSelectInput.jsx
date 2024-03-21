export default function CheckoutSelectInput({
  label,
  name,
  placeholder = "",
  autoComplete = "",
  value,
  setValue,
  countries = [],
}) {
  return (
    <>
      <label
        htmlFor="country"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Country
      </label>
      <div className="mt-2">
        <select
          id={name}
          name={name}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-mid-green sm:text-sm sm:leading-6"
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
