import { NavLink } from "react-router-dom";
import image from "../images/logo.png";


export default function Navigation() {
  return (
<nav className="bg-white-200 fixed w-full top-0 left-0 right-0 border border-lime rounded-full mx-auto max-w-6xl ">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src={image}
                alt="Your Company"
              />
            </div>

            <div className="hidden sm:ml-6 sm:block flex items-center justify-center flex-1 space-x-8">
           
                <NavLink to="/"  className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-14 font-medium">
                  Home
                </NavLink>
                <NavLink
                  to="about"
                  className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-14 font-medium"
                >
                  Products
                </NavLink>
                <NavLink to="categories"
                  
                  className="text-black-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-14 font-medium"
                >
                  Categories
                </NavLink>
              </div>
       
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      
      <button type="button" className="relative rounded-full bg-white-800 p-1 text-black-400 hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
      <span className="absolute -inset-1.5"></span>
      
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
</svg>

    </button>
    
      </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      
          <button type="button" className="relative rounded-full bg-white-800 p-1 text-black-400 hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5"></span>
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
        </button>
        
          </div>
        </div>
      </div>

    </nav>
  );
}
