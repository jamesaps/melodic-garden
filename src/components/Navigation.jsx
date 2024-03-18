import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import image from "../images/logo-dark.png";
import AudioPlayer from "./AudioPlayer";
import Audio from "../audio/audio1.mp3";

export default function Navigation() {
  const { getNumberOfItemsInCart } = useCart();
  console.log(
    "Cart value in Navigation:",
    JSON.stringify(getNumberOfItemsInCart()),
  );

  return (
    <nav className="border-lime fixed left-0 right-0 top-0 z-10 mx-auto w-full max-w-6xl rounded-full border bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <NavLink to="/">
            {" "}
            <div className="flex h-16 flex-shrink-0 items-center justify-center">
              <img className="w-16" src={image} alt="Melodic Garden" />
            </div>{" "}
          </NavLink>
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
                to="/aboutus"
                className="rounded-md px-3 py-2 text-base font-medium text-black hover:bg-gray-700 hover:text-white"
              >
                About Us
              </NavLink>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <AudioPlayer audioSrc={Audio} />

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
