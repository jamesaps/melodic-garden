import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container mx-auto pb-10">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold">Quick Links</h2>
          <ul>
            <li>
              <NavLink to="#">About Us</NavLink>
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

        <div className="flex flex-col items-end">
          <div>
            <h2 className="font-bold">Terms</h2>
            <ul>
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

          <ul className="flex gap-4">
            <li className="font-bold">Instagram</li>
            <li className="font-bold">Facebook</li>
            <li className="font-bold">TikTok</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
