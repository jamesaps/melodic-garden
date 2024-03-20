import { createContext, useContext, useRef, useState, useEffect } from 'react';

const CartDropdownContext = createContext();

export const useCartDropdown = () => useContext(CartDropdownContext);

export const CartDropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [trigger, setTrigger] = useState(null); 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Moved isMobile state here
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CartDropdownContext.Provider
      value={{
        isOpen,
        openDropdown,
        closeDropdown,
        toggleDropdown,
        dropdownRef,
        trigger,
        isMobile, // Include isMobile in the context value
      }}
    >
      {children}
    </CartDropdownContext.Provider>
  );
};
