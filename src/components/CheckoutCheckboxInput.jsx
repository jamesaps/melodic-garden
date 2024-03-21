export default function CheckoutCheckboxInput({
  name,
  label,
  value,
  setValue,
}) {
  return (
    <>
      <div className="relative flex gap-x-3">
        <div className="flex h-6 items-center">
          <input
            id={name}
            name={name}
            type="checkbox"
            checked={value}
            onChange={() => setValue(!value)}
            className="h-4 w-4 rounded border-gray-300 text-mid-green focus:ring-mid-green"
          />
        </div>
        <div className="text-sm leading-6">
          <label htmlFor={name} className="font-medium text-gray-900">
            {label}
          </label>
        </div>
      </div>
    </>
  );
}
