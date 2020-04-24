import React from "react";

// Routing
import { Link } from "react-router-dom";

//Theme Icons
import SunIcon from "../../assets/sun.png";
import MoonIcon from "../../assets/night.png";

interface NavigationProps {
  isLightTheme: boolean;
  setIsLightTheme: any;
}

export const Navigation: React.FC<NavigationProps> = ({
  isLightTheme,
  setIsLightTheme,
}) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link className="hover-border nav-title" to="/">
            Brandon Lent
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link className="hover-border" to="/my-work">
            My Work
          </Link>
        </li>
        <li>
          <a className="hover-border" href="https://blog.brandon-lent.com">
            Blog
          </a>
        </li>
        {/* <li>
          <Link className="hover-border" to="/contact">
            Contact
          </Link>
        </li> */}
        <li>
          <img
            className="themeToggle"
            onClick={() => setIsLightTheme(!isLightTheme)}
            src={isLightTheme ? MoonIcon : SunIcon}
            alt="Light and Dark mode toggle"
          />
        </li>
      </ul>
    </nav>
  );
};
