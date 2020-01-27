import React from "react";

// Routing
import { Link } from "react-router-dom";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Snook Development</Link>
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
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
