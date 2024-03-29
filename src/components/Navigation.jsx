import { useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import CartDropdown from "./CartDropdown";
import { useCartDropdown } from "../contexts/CartDropdownContext";
import image from "../images/logo-dark.png";
import AudioPlayer from "./AudioPlayer";
import Audio from "../audio/audio1.mp3";

export default function Navigation() {
  const { getNumberOfItemsInCart } = useCart();

  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);
  const checkoutIcon = useRef(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    function clickOut(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener("mousedown", clickOut);
    return () => {
      document.removeEventListener("mousedown", clickOut);
    };
  }, [dropdownRef]);

  const {
    isOpen: dropdownIsOpen,
    openDropdown,
    closeDropdown,
    isMobile,
  } = useCartDropdown();
  const navigate = useNavigate();

  const handleCartClick = () => {
    if (isMobile) {
      navigate("/cart");
    } else {
      if (!dropdownIsOpen) {
        openDropdown("navigation");
      } else {
        closeDropdown();
      }
    }
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-10 mx-auto w-full max-w-6xl rounded-3xl shadow-sm bg-white rounded-t-none">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 sm:px-6 lg:px-8">
        <button
          className="inline-block px-4 py-2 text-black sm:hidden"
          onClick={toggleMenu}
        >
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
              strokeWidth="2"
              d={showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <NavLink
          to="/"
          className="flex h-16 flex-shrink-0 items-center justify-center"
        >
          <img className="w-16" src={image} alt="Melodic Garden" />
        </NavLink>

        {showMenu && (
          <div
            ref={dropdownRef}
            className="absolute left-0 top-0 w-full rounded-md border-t border-gray-200 bg-white sm:hidden"
          >
            <NavLink
              to="/"
              className="block px-4 py-2 font-medium text-black hover:bg-green-900 hover:text-white"
              onClick={() => setShowMenu(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="block px-4 py-2 font-medium text-black hover:bg-green-900 hover:text-white"
              onClick={() => setShowMenu(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              className="block px-4 py-2 text-base font-medium text-black hover:bg-green-900 hover:text-white"
              onClick={() => setShowMenu(false)}
            >
              About Us
            </NavLink>
          </div>
        )}

        <div className="hidden space-x-8 sm:flex sm:items-center">
          <NavLink
            to="/"
            className="rounded-md px-3 py-2 text-base font-medium text-black hover:bg-green-900 hover:text-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="rounded-md px-3 py-2 text-base font-medium text-black hover:bg-green-900 hover:text-white"
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className="rounded-md px-3 py-2 text-base font-medium text-black hover:bg-green-900 hover:text-white"
          >
            About Us
          </NavLink>
        </div>

        {!showMenu && (
          <div className="mr-4 flex items-center space-x-2">
            <AudioPlayer audioSrc={Audio} />

            <div className="flex items-center">
              <div
                className="relative cursor-pointer"
                onClick={handleCartClick}
                ref={checkoutIcon}
              >
                <div className="to absolute -top-3 left-3">
                  <p
                    className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white"
                    style={{ userSelect: "none" }}
                  >
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
            </div>
          </div>
        )}
      </div>
      {dropdownIsOpen && <CartDropdown checkoutIcon={checkoutIcon} />}
    </nav>
  );
}
