export default function CheckoutTextInput({
  label,
  name,
  placeholder = "",
  autoComplete = "",
  value,
  setValue,
  type = "text",
  creditCard = false,
}) {
  return (
    <>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={(e) => {
            let newValue = e.target.value;

            if (creditCard) {
              newValue = newValue
                .replace(/[^0-9]/gi, "")
                .replace(/(.{4})/g, "$1 ")
                .trim()
                .substring(0, 19);
            }

            setValue(newValue);
          }}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-mid-green sm:text-sm sm:leading-6"
        />
      </div>
    </>
  );
}
