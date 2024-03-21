import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex justify-center pb-10 md:mx-8 lg:px-0">
      <div className="flex w-full max-w-6xl flex-col items-center justify-between sm:flex-row order-2 ">
        <div className=" flex flex-col items-center sm:items-start order-2 sm:order-1 mt-4 sm:mt-0">
          <h2 className="mb-2 font-bold">Quick Links</h2>
          <ul className="flex flex-col items-center sm:items-start">
            <li>
              <NavLink to="about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="#">Plant Care</NavLink>
            </li>
            <li>
              <NavLink to="#">Contact Us</NavLink>
            </li>
          </ul>

          <p className="mt-2 font-bold">&copy; 2024 Melodic Garden Ltd</p>
        </div>

        <div className="mt-2 flex flex-col items-center sm:mt-0 sm:items-end">
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="mb-2 font-bold">Terms</h2>
            <ul className="flex flex-col items-center sm:items-start">
              <li>
                <NavLink to="#">Terms of Service</NavLink>
              </li>
              <li>
                <NavLink to="#">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="#">Returns and Delivery</NavLink>
              </li>
            </ul>
          </div>

          <ul className="mt-2 flex gap-4">
            <li className="font-bold">Instagram</li>
            <li className="font-bold">Facebook</li>
            <li className="font-bold">TikTok</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
