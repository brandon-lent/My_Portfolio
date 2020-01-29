import React from "react";

// Routing
import { Link } from "react-router-dom";

// Logo
import Logo from "../../assets/Logo.png";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <img src={Logo} alt="Brandon Lent, Software Developer, Logo." />
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/consulting">Consulting</Link>
        </li>
        <li>
          <Link to="/my-work">My Work</Link>
        </li>
        <li>
          <Link to="/case-studies">Case Studies</Link>
        </li>
        <li>
          <Link to="/about">Philosophy</Link>
        </li>
      </ul>
    </nav>
  );
};
