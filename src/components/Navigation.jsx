import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About Us</NavLink>
          <NavLink to="categories">Categories</NavLink>
        </li>
      </ul>
    </nav>
  );
}