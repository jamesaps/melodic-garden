import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import image from "../images/logo-dark.png";

export default function Navigation() {
  const { getNumberOfItemsInCart } = useCart();
  console.log(
    "Cart value in Navigation:",
    JSON.stringify(getNumberOfItemsInCart()),
  );

  return (
    <nav className="border-lime fixed left-0 right-0 top-0 mx-auto w-full max-w-6xl rounded-full border bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center justify-center">
            <img className="h-8 w-auto" src={image} alt="Your Company" />
          </div>
          <div className="hidden flex-grow sm:flex sm:items-center sm:justify-center">
            <div className="flex items-center justify-center space-x-8">
              <NavLink
                to="/"
                className="rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white"
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className="rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white"
              >
                Products
              </NavLink>
              <NavLink
                to="/categories"
                className="rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white"
              >
                Categories
              </NavLink>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            </button>

            <NavLink to="/cart" className="flex items-center">
              <div className="relative">
                <div className="to absolute -top-3 left-3">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                    {getNumberOfItemsInCart()}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
