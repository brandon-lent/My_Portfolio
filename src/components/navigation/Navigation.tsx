import React from "react";

// Routing
import { Link } from "react-router-dom";

// Logo
import DarkLogo from "../../assets/Logo/DarkLogo.png";
import LightLogo from "../../assets/Logo/LightLogo.png";
//Theme Icons
import SunIcon from "../../assets/sun.png";
import MoonIcon from "../../assets/night.png";

interface NavigationProps {
  isLightTheme: boolean;
  setIsLightTheme: any;
}

export const Navigation: React.FC<NavigationProps> = ({
  isLightTheme,
  setIsLightTheme
}) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <img
              src={isLightTheme ? DarkLogo : LightLogo}
              alt="Brandon Lent, Software Developer, Logo."
            />
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
          <Link className="hover-border" to="/case-studies">
            Case Studies
          </Link>
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
