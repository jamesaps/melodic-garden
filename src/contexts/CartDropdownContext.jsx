import { createContext, useContext, useRef, useState } from 'react';

const CartDropdownContext = createContext();

export const useCartDropdown = () => useContext(CartDropdownContext);

export const CartDropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [trigger, setTrigger] = useState(null); 
  const dropdownRef = useRef(null);

  const openDropdown = (trigger = null) => { 
    setIsOpen(true);
    setTrigger(trigger); 
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setTrigger(null); 
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CartDropdownContext.Provider
      value={{
        isOpen,
        openDropdown,
        closeDropdown,
        toggleDropdown,
        dropdownRef,
        trigger, 
      }}
    >
      {children}
    </CartDropdownContext.Provider>
  );
};